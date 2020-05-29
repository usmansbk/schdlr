import moment from 'moment';
import repeat from './repeat';
import {
	getWeekFromNow,
	// isSpanDays,
	// getDaysCount,
} from './time';

function extractDates(events, previous) {
	const direction = previous ? -1 : 0;
	let dates = [];
	events.forEach(e => {
		const recur = repeat(e.startAt)
			.span(e.endAt)
			.every(e.recurrence)
			.from(moment().add(direction, 'day'))
			.until(e.until);
		
		const nextDate = previous ? recur.previousDate() : recur.nextDate();
		if (nextDate) {
			dates.push(nextDate.toISOString());
		}
	});
	return dates;
}

function* EventSectionGenerator(events, previous) {
	const someday =  extractDates(events, previous);
	const dates = Array.from(new Set(getWeekFromNow(previous).concat(someday)));
	console.log(JSON.stringify(dates, null, 2))
	const order = previous ? -1 : 1;
	dates.sort((a, b) => moment(a).diff(b) * order); // dont delete no matter what

	for (let date of dates) {
		const data = [];
		events.forEach(event => {
			const recur = repeat(event.startAt)
											.span(event.endAt)
											.from(date)
											.every(event.recurrence)
											.until(event.until);
			if (!event.isCancelled && recur.matches(date)) {
				data.push(update(event, date));
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
			nextToken: date
		});
	}
}

export function update(event, date) {
	const previousStartMoment = moment(event.startAt);

	const hr = previousStartMoment.hour();
	const min = previousStartMoment.minute();
	const sec = previousStartMoment.second();

	const nextMoment = moment(date).hour(hr).minute(min).second(sec);
	const startAt = nextMoment.toISOString();

	const previousEndMoment = moment(event.endAt);
	const duration = moment.duration(previousEndMoment.diff(previousStartMoment));
	const endAt = nextMoment.clone().add(duration).toISOString();
	
	return Object.assign({}, event, {
		startAt,
		endAt
	});
}

export {
  EventSectionGenerator
};