import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import debounce from 'lodash.debounce';
import categories from 'i18n/categories';

export default class AppState {
  constructor(settingsStore) {
    this.settings = settingsStore;
  }
  
  debounceQuery = debounce(val => this.query = val, 250);

  @observable hasNotifications = false;

  @persist @observable userId = null;
  @persist @observable loggingIn = false;
  @observable isSync = false;
  @observable isConnected = false;
  @observable searchText = '';
  @observable query = '';
  @persist @observable location = null;

  @persist @observable lastSyncTimestamp = null;

  @persist('list') @observable mutedEvents = [];
  @persist('list') @observable mutedSchedules = [];
  @persist('list') @observable allowedEvents = [];
  @persist('object') @observable prefs = {
    showPrivateScheduleAlert: true,
  };

  @persist('list') @observable categories =  categories(this.settings.language);

  @action setUserId = id => this.userId = id;
  @action updateLastSyncTimestamp = timestamp => this.lastSyncTimestamp = timestamp;
  @action setLoginState = state => this.loggingIn = Boolean(state); 
  @action toggleConnection = isConnected => this.isConnected = isConnected;
  @action togglePref = (pref) => {
    const prevValue = this.prefs[pref];
    this.prefs[pref] = !prevValue;
  };

  @action reset() {
    this.isConnected =false;
    this.searchText = '';
    this.query = '';
    this.mutedEvents = [];
    this.allowedEvents = [];
    this.mutedSchedules = [];
    this.location = null;
    this.prefs = {
      showPrivateScheduleAlert: true,
    }
    this.categories = categories(this.settingsStore.language);
    this.loggingIn = false;
    this.userId = null;
    this.lastSyncTimestamp = null;
  }

  @action addCustomType = (category) => {
    const hasType = this.categories.findIndex(item => item.toLowerCase() === category.toLowerCase());
    if (hasType === -1) {
      this.categories.push(category);
    }
  };

  @action removeCustomType = (category) => {
    this.categories = this.categories.filter(item => item.toLowerCase() !== category.toLowerCase());
  };

  @action setNotificationsIndicator = status => this.hasNotifications = status;

  @action toggleMute = (id, isMuted) => {
    if (isMuted) {
      const inMutedList = this.mutedEvents.includes(id);
      if (inMutedList) {
        this.mutedEvents = this.mutedEvents.filter(currentId => currentId !== id);
      } else {
        this.allowedEvents.push(id);
      }
    } else {
      this.mutedEvents.push(id);
      this.allowedEvents = this.allowedEvents.filter(currentId => currentId !== id);
    }
  };

  @action toggleMuteSchedule = (mutedId, isMuted) => {
    if (isMuted) {
      this.mutedSchedules = this.mutedSchedules.filter(id => id !== mutedId);
    } else {
      this.mutedSchedules.push(mutedId);
    }
  };

  @action clearMutedList = () => {
    this.mutedEvents = [];
  };

  @action onChangeText (searchText) {
    this.searchText = searchText;
    this.debounceQuery(searchText);
  }
}