import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import SimpleToast from 'react-native-simple-toast';
import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import debounce from 'lodash.debounce';
import { requestLocationPermission } from 'helpers/permissions';
import categories from './eventCategories';

export default class AppState {
  @persist @observable userId = null;
  @persist @observable loggingIn = false;

  @observable isConnected = false;
  @observable searchText = '';
  @observable query = '';
  @persist @observable address = 'Nigeria';
  @persist('list') @observable mutedList = [];
  @persist('list') @observable allowedList = [];
  @persist('object') @observable location = {
    lon: null,
    lat: null
  };
  @persist('object') @observable prefs = {
    showPrivateScheduleAlert: true,
  }
  @persist('list') @observable categories =  categories;

  debounceQuery = debounce((val) => this.query = val, 250);

  @action setUserId = id => this.userId = id;

  @action setLoginState = (state) => this.loggingIn = Boolean(state);
  
  @action toggleConnection = (isConnected) => {
    this.isConnected = isConnected;
  }

  @action togglePref = (pref) => {
    const prevValue = this.prefs[pref];
    this.prefs[pref] = !prevValue;
  }

  @action reset() {
    this.isConnected =false;
    this.searchText = '';
    this.query = '';
    this.mutedList = [];
    this.allowedList = [];
    this.address = 'Nigeria';
    this.location = {
      lat: null,
      lon: null
    };
    this.prefs = {
      showPrivateScheduleAlert: true,
    }
    this.categories = categories;
    this.loggingIn = false;
    this.userId = null;
  }

  @action addCustomType = (category) => {
    const hasType = this.categories.findIndex(item => item.toLowerCase() === category.toLowerCase());
    if (hasType === -1) {
      this.categories.push(category);
    }
  }

  @action removeCustomType = (category) => {
    this.categories = this.categories.filter(item => item.toLowerCase() !== category.toLowerCase());
  }
  
  @action setLocation = (address) => {
    this.address = address;
    if (address) {
      Geocoder.geocodeAddress(address)
        .then(res => {
          const loc = res[0];
          const { lat, lng } = loc;
          this.location.lon = lng;
          this.location.lat = lat;
        }).catch(err => console.error(err));
    }
  }

  @action getAddress = () => {
    if (this.location.lon && this.location.lat) {
      const loc =  {
        lat: this.location.lat,
        lng: this.location.lon
      };
      Geocoder.geocodePosition(loc).then(res => {
        const loc = res[0];
        const address = `${loc.locality ? loc.locality + ', ' : ''}${loc.country}`;
        this.address = address;
      }).catch(err => console.error(err));
    }
  }
  
  @action requestLocation = async () => {
    const { lon, lat } = this.location;
    if (!(lon && lat)){
      Alert.alert(
        'Location Permission',
        "Schdlr needs access to your location for better experience.",
        [
          { text: 'Ask me later' },
          { text: 'Yes', onPress: this.getLocation },
        ],
        { cancelable: false }
      );
    }
  }

  @action getLocation = async () => {
    const requestGranted = await requestLocationPermission();
    if (requestGranted) {
      Geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: {
              longitude,
              latitude
            }
          } = position;
          this.location.lon = longitude;
          this.location.lat = latitude;
          this.getAddress();
        },
        (error) => {
          console.error(error);
          SimpleToast.show("Failed to get location. Turn off airplane mode.", SimpleToast.SHORT);
          // throw error;
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000
        }
      );
    }
  };

  @action toggleMute = (id, isMuted) => {
    const hasId = this.mutedList.includes(id);
    const isAllowed = this.allowedList.includes(id);
    if (hasId) {
      this.mutedList = this.mutedList.filter(currentId => id !== currentId);
    } else if (isAllowed && isMuted) {
      this.allowedList = this.allowedList.filter(currentId => id !== currentId);
    } else if (isMuted && !isAllowed) {
      this.allowedList.push(id);
    } else {
      this.mutedList.push(id);
    }
  }

  @action clearMutedList = () => {
    this.mutedList = [];
  }

  @action onChangeText (searchText) {
    this.searchText = searchText;
    this.debounceQuery(searchText);
  }
}