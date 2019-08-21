import { PermissionsAndroid } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { I18n } from 'aws-amplify';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: I18n.get('Schdlr Location Permission'),
        message: I18n.get("Schdlr App needs access to your location so events are easier to find."),
        buttonPositive: I18n.get("OK"),
        buttonNegative: I18n.get("Cancel"),
        buttonNeutral: I18n.get("Ask Me Later")
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    SimpleToast.show(error.message, SimpleToast.SHORT);
    return false;
  }
}

export {
  requestLocationPermission
};
