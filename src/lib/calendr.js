import moment from 'moment';
import 'moment-recur';
import uniqWith from 'lodash.uniqwith';
import memoize from 'lodash.memoize';

export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

export const sortBy = (arr, key) => {
  return arr.sort((a, b) => {
    return moment(a[key]) - moment(b[key]);
  });
};

function getInterval(recurrence) {
  switch (recurrence) {
    case 'DAILY': return 'days';
    case 'WEEKDAYS': return 'weekdays';
    case 'WEEKLY':  return 'weeks';
    case 'MONTHLY': return 'months';
    case 'YEARLY': return 'years';
    default: return null;
  }
}

/**
 * 
 * @param { Array } events 
 * @param { Date } afterDate 
 * @param { Number } DAYS_PER_PAGE 
 * @returns a SectionListData of events with empty days omitted
 */
function generateNextEvents(events=[], refDate, DAYS_PER_PAGE=3, before=false) {
  console.log('calling generateNextEvents function');
  const totalStart = Date.now();
  const sections = [];
  let start = Date.now();
  let nextDate = getNextDate(events, moment(refDate), before);
  let stop = Date.now();
  console.log('getNextDate#0', stop - start);
  if (events.length && nextDate) {
    for (let i = 0; i < DAYS_PER_PAGE; i++) {
      start = Date.now();
      sections.push(processNextDayEvents(events, nextDate));
      stop = Date.now();
      console.log('processNextDayEvents#'+(i+1), stop - start);
      start = Date.now();
      nextDate = getNextDate(events, nextDate, before);
      stop = Date.now();
      console.log('getNextDate#'+(i+1), stop - start);
      if (!nextDate) break;
    }
  }
  const totalStop = Date.now();
  console.log('Total time:', (totalStop - totalStart) + 'ms\n');
  return sections;
}

/**
 * 
 * @param { Array } events 
 * @param { Date } afterDate 
 * @param { Number } DAYS_PER_PAGE 
 * @returns a SectionListData of events with empty days omitted
 */
function generatePreviousEvents(events=[], beforeDate, DAYS_PER_PAGE) {
  return generateNextEvents(events, beforeDate, DAYS_PER_PAGE, true).reverse();
}

/* Return next available event date */
const getNextDate = (events=[], refDate, before) => {
  return uniqWith(events.map((currentEvent) => {
    const eventDate = moment(currentEvent.startAt).startOf('D');
    const endDate = moment(currentEvent.endAt).endOf('D');
    const untilAt = currentEvent.until ? moment(currentEvent.until).endOf('day') : undefined;
    const interval = getInterval(currentEvent.recurrence);
    const isValid = !currentEvent.isCancelled;
    const isExtended = moment(refDate).isBetween(eventDate, endDate, null, '[]');

    let recurrence;
    if (isValid && isExtended) {
      recurrence = eventDate.recur(endDate).every(1).day().fromDate(refDate);
      const nextDates = before ? recurrence.previous(1) : recurrence.next(1);
      const nextDate = nextDates[0];
      const shouldReturn = nextDate.isBetween(eventDate, endDate, null, '[]');

      if (shouldReturn) return nextDate.local().startOf('day');
      if (interval) {
        if (interval === 'weekdays') {
          recurrence = eventDate.recur().every(weekdays).daysOfWeek();
        } else {
          recurrence = eventDate.recur().every(1, interval);
        }
        recurrence.fromDate(refDate);
        const nextDates = before ? recurrence.previous(1) : recurrence.next(1);
        const nextDate = nextDates[0];
        const start = moment(currentEvent.startAt);
        const startSec = start.seconds();
        const startMins = start.minutes();
        const startHours = start.hours();

        const end = moment(currentEvent.endAt);

        const duration = Math.abs(moment.duration(start.diff(end)));

        const startAt = nextDate.clone().seconds(startSec).minutes(startMins).hours(startHours).toISOString();

        const endAt = moment(startAt).add(duration);
        const shouldReturn = nextDate.isBetween(eventDate, endAt, null, '[]');
        if (shouldReturn) return nextDate.local().startOf('day');
      }
    } else if (interval && isValid) {
      if (interval === 'weekdays') {
        recurrence = eventDate.recur().every(weekdays).daysOfWeek();
      } else {
        recurrence = eventDate.recur().every(1, interval);
      }
      recurrence.fromDate(refDate);
      const nextDates = before ? recurrence.previous(1) : recurrence.next(1);
      const nextDate = nextDates[0];
      const validStart = nextDate.isAfter(eventDate, 'day');
      if (untilAt && nextDate.isAfter(untilAt, 'day')) {
        // do nothing
      } else if (validStart) {
        return nextDate.local().startOf('day');
      } else if (interval === 'weekdays') {
        // Prevent weekends
        return null;
      }
    }
    return eventDate;
  }).filter(date => {
    if (!date) return false;
    if (before) return date.isBefore(refDate, 'day');
    return date.isAfter(refDate, 'day');
  }).sort((a, b) => {
    if (before) return -(a - b);
    return a - b;
  }), (a, b) => a.toISOString() === b.toISOString())[0];
};

/**
  * Returns a SectionList item of a day's events 
  * @param { Array } initialEvents - an array of calendar events
  * @param { Date } afterDate - date to start from
  * @return 
*/
const processNextDayEvents = memoize((initialEvents, nextDate) => {
  let refDate = moment().startOf('D');
  if (nextDate) refDate = moment(nextDate).startOf('D');

  return initialEvents.reduce((accumulator, currentEvent) => {
    const eventDate = moment(currentEvent.startAt);
    const endDate = moment(currentEvent.endAt);
    const interval = getInterval(currentEvent.recurrence);
    const isExtended = refDate.isBetween(eventDate, endDate, 'D', '[]');
    const isValid = currentEvent.until ? refDate.isSameOrBefore(moment(currentEvent.until), 'day') : true;

    if (eventDate.isSame(refDate, 'day') || isExtended) {
      const currentEventWithMeta = Object.assign({}, currentEvent, {
        ref_date: refDate.toISOString(),
        isExtended: isExtended && !eventDate.isSame(refDate, 'D')
      });
      accumulator.data.push(currentEventWithMeta);
    } else if (interval && !currentEvent.isCancelled && isValid) {
      let recurrence;
      if (interval === 'weekdays') {
        recurrence = eventDate.recur().every(weekdays).daysOfWeek();
      } else {
        recurrence = eventDate.recur().every(1, interval);
      }
      const hasNext = recurrence.matches(refDate);
      if (hasNext) {
        const nextEvent = process(currentEvent, refDate.toISOString());
        accumulator.data.push(nextEvent);
      }
    }
    accumulator.data = sortBy(accumulator.data, 'startAt', '__typename');
    return accumulator;
  }, {
    data: [],
    title: refDate.toISOString(),
  });
}, (...args) => JSON.stringify(args));

// Returns a flat list of latest events dates
function processEvents(events) {
  if (!events) return [];
  return events.map((currentEvent) => {
    if (typeof currentEvent === 'string') return currentEvent;
    const eventDate = moment(currentEvent.startAt);
    const interval = getInterval(currentEvent.recurrence);
    let recurrence;
    if (interval) {
      if (interval === 'weekdays') {
        recurrence = eventDate.recur().every(weekdays).daysOfWeek();
      } else {
        recurrence = eventDate.recur().every(1, interval);
      }
      recurrence.fromDate(moment().add(-1, 'day')); // it exclusive so minus one day to include today
      const nextDates = recurrence.next(1);
      return process(currentEvent, nextDates[0].toISOString());
    }
    return Object.assign({}, currentEvent, {
      ref_date: moment().startOf('D').toISOString(),
    });
  });
};

/**
 * @param { object } event - target event
 * @param { date } date - next event date
 * @return { object } event - a new event with the given next valid start and end date
 */
function process(event, date) {
	const previousStartMoment = moment(event.startAt);

  const hr = previousStartMoment.hour();
	const min = previousStartMoment.minute();
	const sec = previousStartMoment.second();

	const nextMoment = moment(date).hour(hr).minute(min).second(sec);
	const startAt = nextMoment.toISOString();

	const previousEndMoment = moment(event.endAt);
	const isExtended = nextMoment.isBetween(previousStartMoment, previousEndMoment, 'day', '[]');

  const duration = moment.duration(previousEndMoment.diff(previousStartMoment));
  const endAt = nextMoment.clone().add(duration).toISOString();

	let isConcluded = false;
	if (event.until) {
		const finalMoment = moment(event.until);
		isConcluded = nextMoment.isAfter(finalMoment);
	}

	return Object.assign({}, event, {
		startAt,
		endAt,
		isExtended,
		isConcluded,
		ref_date: date
	});
}

export {
  processEvents,
  getNextDate,
  generateNextEvents,
  generatePreviousEvents
};