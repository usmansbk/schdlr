import moment from 'moment';
import { getWeekFromNow, isSpanDays } from './time';

function* EventSectionGenerator(events, previous) {
	let dates = getWeekFromNow(previous);
	for (let date of dates) {
		const data = [];
		events.forEach(event => {
			if (match(event, date)) {
				data.push(process(event, date));
			}
		});
		data.sort((a, b) => moment(a.startAt).diff(b.startAt));
		const items = [
			{
				data,
				title: date
			}
		] ;
		yield ({
			items,
			afterDate: date,
			beforeDate: date
		});
	}
}

// Checks if event will occur in the given date
function match(event, date) {
	const startMoment = moment(event.startAt);
	const endMoment = moment(event.endAt);
	const dateMoment = moment(date);
	// isValid - date is same as or between start and end date

	const isValidStart = startMoment.isSame(dateMoment, 'day');
	const isValid= dateMoment.isBetween(startMoment, endMoment, 'day', '[]');
	const isCancelled = event.isCancelled;
	let isRecurring = false;
	if (event.recurrence !== 'NEVER') {
		if (event.recurrence === 'WEEKDAYS') {
			isRecurring = dateMoment.isoWeekday() < 6;
		} else {
			isRecurring = true;
		}
	}
	if (event.until) {
		const finalMoment = moment(event.until);
		isRecurring = dateMoment.isSameOrBefore(finalMoment, 'day');
	}

	return !isCancelled && (isValid || (isValidStart && isRecurring));
}

function process(event, date) {
	const previousStartMoment = moment(event.startAt);

	const hr = previousStartMoment.hour();
	const min = previousStartMoment.minute();
	const sec = previousStartMoment.second();

	const nextMoment = moment(date).hour(hr).minute(min).second(sec);
	let startAt = nextMoment.toISOString();

	const previousEndMoment = moment(event.endAt);
	const duration = moment.duration(previousEndMoment.diff(previousStartMoment));
	let endAt = nextMoment.clone().add(duration).toISOString();

	let isConcluded = false;
	if (event.until) {
		const finalMoment = moment(event.until);
		isConcluded = nextMoment.isAfter(finalMoment);
	}

	const isExtended = isSpanDays(previousStartMoment, previousEndMoment);
	if (isExtended || isConcluded) {
		startAt = previousStartMoment.toISOString();
		endAt = previousEndMoment.toISOString();
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
  EventSectionGenerator
};