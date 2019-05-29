import { Alert } from 'react-native';
import { repeatLength, FIVE_MINUTES } from './time';
import { ONE_TIME_EVENT } from './constants';
import {
  CANT_REPEAT,
  INVALID_START,
  WRONG_TIME,
  DURATION_TOO_SHORT,
  SHORT_UNTIL
} from './errorMessages';

export const canRepeat = ({ repeat, endAt, startAt }) => {
  if (repeat === ONE_TIME_EVENT ) return true; // One-time event can be repeated
  const duration = Math.abs(Date.parse(endAt) - Date.parse(startAt));
  return duration < repeatLength(repeat);
};
export function isEventValid(event) {
  const startAt = Date.parse(event.startAt);
  const endAt = Date.parse(event.endAt);
  const untilAt = event.until && Date.parse(event.until);

  let validity = true
  if (!canRepeat(event)) {
    Alert.alert("Repeat", CANT_REPEAT);
    validity = false;
  } else if (startAt > endAt) {
    Alert.alert('Duration', INVALID_START);
    validity = false;
  } else if ((endAt - startAt) < FIVE_MINUTES) {
    Alert.alert('Too short', DURATION_TOO_SHORT);
    validity = false;
  } else if (untilAt && (untilAt < endAt)) {
    Alert.alert("Until date", SHORT_UNTIL);
    validity = false;
  }
  return validity;
}

// Trim the value of a form TextInput
export const getValue = (value) => {
  const ret = value && value.trim() && value.length && value;
  return Boolean(ret) ? ret : null;
}