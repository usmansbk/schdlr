import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import { observable, action, computed } from 'mobx';
import { persist } from 'mobx-persist';
import { requestLocationPermission } from 'helpers/permissions';

export default class Location {
  @persist('object') @observable point = null;

  @persist @observable locality = null;
  @persist @observable country = null;
  @persist @observable countryCode = null;

  @action fetchLocation = async () => {
    try {
      const hasLocationPermission = await requestLocationPermission();
      if (hasLocationPermission) {
        await Geolocation.getCurrentPosition(
          async (position) => {
            const { coords: {
              latitude,
              longitude
            } } = position;
            const loc = {
              lat: latitude,
              lng: longitude
            };

            this.point = loc;

            try {
              const locations = await Geocoder.geocodePosition(loc);
              // console.log(locations);
              const bestLocation = locations[0];
              const {
                locality,
                country,
                countryCode
              } = bestLocation;
              this.locality = locality;
              this.country = country;
              this.countryCode = countryCode;

            } catch (error) {
              console.log(error);
            }
          },
          (error) => {
            console.log(error.message);
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  @computed get location() {
    if (this.locality && this.country) {
      return `${this.locality}, ${this.countryCode}`;
    }
    return null;
  }
}