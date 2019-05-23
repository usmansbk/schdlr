import React from 'react';
import { Linking, Platform } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import LocalNotifications from 'react-native-push-notification';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { inject, observer } from 'mobx-react/native';
import List from 'components/lists/Events';
import FAB from 'components/common/Fab';
import NavigationService from 'config/navigation';
import schdlAll from 'helpers/setReminders';
import { requestLocationPermission } from 'helpers/permissions';

@inject('stores')
@observer
export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this._handleDeeplink();
    this._handleLocalNotifications();
  }

  _handleLocalNotifications = () => {
    // Configure notifications for local events reminder
    LocalNotifications.configure({
      onNotification: notification => {
        const { data: { id } } = notification;

        NavigationService.navigate('EventDetails', { id });
        if (Platform.OS === 'ios') {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      }
    });
  }
  
  _handleDeeplink = async () => {
    try {
      const url = await Linking.getInitialURL();
      if (url) {
        NavigationService.deepLinkNavigate(url);
      }
    } catch (error) {
      SimpleToast.show(error.message, SimpleToast.SHORT);
    }
  }
  
  shouldComponentUpdate = (nextProps) => nextProps.isFocused;
  
  componentDidUpdate = () => {
    schdlAll(this.props.events);
  }
 
  componentDidMount = async () => {
    const { stores } = this.props;
    const colors = stores.themeStore.colors;
    Linking.addEventListener('url', this.handleOpenURL);
    try {
      await changeNavigationBarColor(colors.bg, !stores.settingsStore.dark);
      await requestLocationPermission();
    } catch (e) {
      SimpleToast.show(error.message, SimpleToast.SHORT);
    }
  };

  componentWillUnmount = () => {
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = event => NavigationService.deepLinkNavigate(event.url);

  render() {
    const {
      loading,
      events,
      nextToken,
      error,
      onRefresh,
      stores
    } = this.props;

    if (error) SimpleToast.show('Failed to load events', SimpleToast.SHORT);

    return (
      <>
        <List
          loading={loading}
          events={events}
          navigation={this.props.navigation}
          hasPreviousEvents={Boolean(nextToken)}
          onRefresh={onRefresh}
          error={error}
        />
        <FAB
          icon="edit"
          onPress={() => this.props.navigation.navigate('NewEvent')}
        />
      </>
    )
  }
}

