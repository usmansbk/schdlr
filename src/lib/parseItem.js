import moment from 'moment';
import 'twix';
import { I18n } from 'aws-amplify';
import { capitalize, decapitalize } from './utils';
import { momentCounter } from './time';

export const getCategory = (category) => {
  if (!category) return '';
  if (category.toLowerCase().trim() === 'normal') return '';
  return decapitalize(category);
};

export const isEventCancelled = (event) => {
  const { startAt, isCancelled } = event;
  const cancelledDates = event.cancelledDates || [];
  return isCancelled || cancelledDates.includes(startAt);
}

export const getStatus = ({
  isCancelled,
  cancelledDates = [],
  startAt,
  endAt,
  isConcluded
}) => {
  if (isConcluded) return I18n.get("STATUS_concluded");
  const cancelled =  isEventCancelled({ cancelledDates, startAt, isCancelled });
  if (cancelled) return I18n.get("STATUS_cancelled");
  const isEnded = moment().twix(endAt).isPast();
  if (isEnded) return I18n.get("STATUS_done");
  const isOngoing = moment(startAt).twix(endAt).isCurrent();
  if (isOngoing) return I18n.get('STATUS_ongoing');
  return I18n.get("STATUS_upcoming");
};

export const isEventValid = (event) => {
  const { isCancelled, startAt, endAt } = event;
  const cancelledDates = event.cancelledDates || [];
  return moment().twix(endAt).isCurrent() && !isEventCancelled({ cancelledDates, startAt, isCancelled });
};

export const parseRepeat = (recurrence) => {
  const val = recurrence.toLowerCase();
  switch(val) {
    case 'never': return '';
    case 'daily': return 'daily';
    case 'weekly': return 'weekly';
    case 'weekdays': return 'every weekday';
    case 'monthly': case 'monthly_day': return 'monthly';
    case 'yearly': return 'yearly';
    default: return recurrence;
  }
};

export const captionDetails = ({
  allDay,
  recurrence,
  category,
  duration,
  startAt,
  endAt,
  ref_date
}) => {
  const isSameDay = moment(startAt).isSame(endAt, 'D');
  const startMoment = moment(startAt).startOf('D');
  const endMoment = moment(endAt).endOf('D');

  let span;
  if (!isSameDay) {
    span = startMoment.from(endMoment, true);
    const count = momentCounter({ startAt, ref_date });
    if (count) {
      span = `${count + 1} of ${span}`;
    }
  }
  const validCategory = category ? ' ' + category : '';
  const caption = allDay ? (`${recurrence}${validCategory}`) : (
    `${span || duration}${recurrence ? ' ' + recurrence : ''}${validCategory}`);
  let formatted = capitalize(caption.trim());
  return formatted;
};