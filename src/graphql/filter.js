import moment from 'moment';

const intervals = ["DAILY", "WEEKDAYS", "WEEKLY", "MONTHLY", "MONTHLY_DAY", "YEARLY"];

export const filterEvents = {
  "expression":  "#startAt >= :startOfDay OR ( #repeat IN (:intervals) AND (#untilAt >= :startOfDay OR #forever = :forever) AND #startAt >= :startOfDay )",
  "expressionNames": JSON.stringify({
    "#endAt"       : "endAt",
    "#repeat"      : "repeat",
    "#untilAt"     : "untilAt",
    "#forever"     : "forever"
  }),
  "expressionValues" :  JSON.stringify({
    ":startOfDay"    : moment().startOf('day').subtract(1, 'day').valueOf(),
    ":intervals"     : `${intervals}`,
    ":forever"       : true
  })
};

export const filterPastEvents = (date) => ({
  "expression": "#startAt < :startOfDay",
  "expressionNames": JSON.stringify({
    "#endAt"        : "endAt"
  }),
  "expressionValues" : JSON.stringify({
    ":startOfDay"    : moment(date).startOf('day').valueOf()
  })
});