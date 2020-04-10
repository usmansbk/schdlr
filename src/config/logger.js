import crashlytics from '@react-native-firebase/crashlytics';

function logError(error) {
  let e = error;
  if (!(error instanceof Error)) {
    if (typeof error === 'object') e = JSON.stringify(error);
    e = new Error(e);
    console.log(e);
  }
  crashlytics().recordError(e);
}

function log(message) {
  if (message && __DEV__) {
    console.log(message);
    crashlytics().log(message);
  }
}

export default {
  logError,
  log
};