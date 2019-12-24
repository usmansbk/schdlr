const AWS = require("aws-sdk");
const moment = require('moment');
const sendMessage = require('./push'); 
   
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userPrefTableName = process.env.USER_PREF_TABLE_NAME;
const followTableName = process.env.FOLLOW_TABLE_NAME;
const gsiFollowers = process.env.GSI_FOLLOWERS;
const gsiFollowersKey = process.env.GSI_FOLLOWERS_KEY;
const BATCH_SIZE = Number(process.env.BATCH_SIZE);

console.log('Loading function');

exports.handler = async (event, context) => {
  const { Records } = event;
  for (let i = 0; i < Records.length; i++) {
    await processRecord(Records[i]);
  }
  return `Successfully processed ${event.Records.length} records.`;
};

async function processRecord(record) {
  const {
    Keys,
    NewImage,
    OldImage
  } = record.dynamodb;
  const keys = unmarshall(Keys);
  const newImage = unmarshall(NewImage);
  const oldImage = unmarshall(OldImage);
  const eventObject = newImage.__typename ? newImage : oldImage;
  const eventName = record.eventName;
  if (eventName === 'INSERT' || eventName === 'MODIFY') {
    const Item = {
      id: keys.id,
      eventName,
      oldImage: oldImage.__typename && oldImage,
      newImage: newImage.__typename && newImage,
    };
    const notification = formatNotification(Item);
    if (notification) {
	    await sendPushNotification({
	      notification,
	      eventScheduleId: eventObject.eventScheduleId,
	      eventAuthorId: eventObject.eventAuthorId,
	    });
    }
  }
}

async function sendPushNotification({ notification, eventScheduleId, eventAuthorId }) {
  const followersIds = await getScheduleFollowersId(eventScheduleId);
  if (followersIds.length) {
    const users = await getUsers(followersIds);
    if (users.length) {
      const playerIds = getPlayerIds(users);
      await sendMessage(notification, playerIds);
    }
  }
}

function getPlayerIds(users) {
  // const initialValue = ["a828747f-f24c-4c03-a7c8-9efca9562c0b"];
  const initialValue = [];
  return users.reduce((accumulator, currentValue) => {
    const { userId, disablePush } = currentValue;
    if (!disablePush && userId) {
    	accumulator.push(userId);
    }
    return accumulator;
  }, initialValue);
}

async function getUsers(ids) {
  let users = [];
  const Keys = ids.map(id => ({ id }));
  for (let i = 0; i <= ids.length; i += BATCH_SIZE) {
    const params = {
      RequestItems: {
        [userPrefTableName]: {
          Keys: Keys.slice(i, i + BATCH_SIZE)
        }
      }
    };
    const result = await dynamodb.batchGet(params).promise();
    const { Responses } = result;
    const data = Responses[userPrefTableName];
    if (data) users = users.concat(data);
  }
  return users;
}

function capitalize(string) {
  if (!string) return '';
  const firstLetter = string[0].toUpperCase();
  return firstLetter + string.substring(1);
}

async function getScheduleFollowersId(id) {
  const params = {
    TableName: followTableName,
    IndexName: gsiFollowers,
    KeyConditionExpression: 'followScheduleId = :id',
    ExpressionAttributeValues: {
      ':id': id
    }
  };
  const ids = [];
  const result = await dynamodb.query(params).promise();
  const { Items, LastEvaluatedKey } = result;
  Items.forEach((item) => ids.push(item.followUserId));
  
  let ExclusiveStartKey = LastEvaluatedKey;
  while(ExclusiveStartKey) {
    params.ExclusiveStartKey = ExclusiveStartKey;
    const result = await dynamodb.query(params).promise();
    const { Items, LastEvaluatedKey } = result;
    Items.forEach((item) => ids.push(item[gsiFollowersKey]));
    ExclusiveStartKey = LastEvaluatedKey;
  }
  return ids;
}

function unmarshall(object) {
  return AWS.DynamoDB.Converter.unmarshall(object);
}

function formatDate(date) {
  // return moment(date).add(1, 'h').format('MMM DD, YYYY hh:mm A');
  return moment(date).add(1, 'h').calendar();
}

function formatNotification(item) {
  const {
    eventName,
    oldImage,
    newImage,
  } = item;
  const entity = newImage || oldImage;
  const category = entity.category ? entity.category.toLowerCase() : '';
  const title = entity.title;
  let foundDate;
  let ttl;
  if (entity.recurrence === 'NEVER') {
    ttl = Math.floor((Date.parse(entity.endAt) - Date.now()) / 1000);
  } else {
    ttl = Math.floor((Date.parse(entity.endAt) - Date.parse(entity.startAt)) / 1000);
  }

  let message;
  if (eventName === 'INSERT') {
  	const date = formatDate(entity.startAt);
  	message = `${category} scheduled for ${date}.`.trim();
  } else {
  	const oldCancelledDates = oldImage.cancelledDates || [];
  	const newCancelledDates = newImage.cancelledDates || [];

  	if (entity.isCancelled) {
  		message = `${category} was cancelled.`.trim();
  	} else if (oldCancelledDates.length !== newCancelledDates.length) {
	  	foundDate = newCancelledDates.find(date => !oldCancelledDates.includes(date));
	    const cancelledDate = formatDate(foundDate);
	    message = `cancelled ${category ? category : 'event'} scheduled for ${cancelledDate}.`;
  	} else if (oldImage.startAt !== newImage.startAt) {
      const newDate = formatDate(newImage.startAt);
      message = `${category} was rescheduled for ${newDate}.`.trim();
      foundDate = newImage.startAt;
  	} else if (Boolean(newImage.venue) && (oldImage.venue !== newImage.venue)) {
  		message = `${category} venue changed to ${newImage.venue}.`.trim();
  	}
  }

  if (!message || (ttl <= 0) ) return null;

  return {
    title,
    message: capitalize(message),
    ttl,
    data: {
      type: 'Event',
      id: entity.id,
      refStartAt: foundDate
    }
  };
}
