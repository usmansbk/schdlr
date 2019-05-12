import React from 'react';
import { ScrollView } from 'react-native';
import {
  Appbar,
  List,
  Switch,
  Divider
} from 'react-native-paper';
import { inject, observer } from 'mobx-react/native';
import styles from 'config/styles';
import colors from 'config/colors';

@inject("stores")
@observer
export default class Settings extends React.Component {
  static defaultProps = {
    stores: {}
  }

  handleValueChange = (value) => {
    this.props.stores.settingsStore.toggle(value)
  }

  toggleTheme = () => {
    this.props.stores.settingsStore.toggleTheme();
  }

  render() {
    const {
      goBack,
      openRemindMeDialog,
      stores,
    } = this.props;
    const {
      dark,
      sound,
      vibrate,
      disableReminders,
      headsUp,
      starredEventsOnly,
      disablePushNotifications,
    } = stores.settingsStore;

    return (
      <>
        <Appbar.Header style={styles.header} collapsable>
          <Appbar.BackAction color={colors.gray} onPress={goBack} />
          <Appbar.Content
            title="Settings"
            titleStyle={styles.headerColor}
          />
        </Appbar.Header>
        <ScrollView style={styles.bg}>
          <List.Section title="General">
            <List.Item
              title="Sound"
              right={() => (
                <Switch
                  value={sound}
                  onValueChange={() => this.handleValueChange('sound')}
                />
              )}
            />
            <Divider />
            <List.Item
              title="Vibrate"
              right={() => (
                <Switch
                  value={vibrate}
                  onValueChange={() => this.handleValueChange('vibrate')}
                />
              )}
            />
            <Divider />
            <List.Item
              title="Dark theme"
              right={() => (
                <Switch
                  value={dark}
                  onValueChange={this.toggleTheme}
                />
              )}
            />
            <Divider />
          </List.Section>
          <List.Section title="Reminders">
            <List.Item
              title="Disable"
              right={() => (
                <Switch
                  value={disableReminders}
                  onValueChange={() => this.handleValueChange('disableReminders')}
                />
              )}
            />
            <Divider />
            {
              false && (
              <>
                <List.Item
                  title="Heads-up"
                  right={() => (
                    <Switch
                      value={headsUp}
                      onValueChange={() => this.handleValueChange('headsUp')}
                    />
                  )}
                />
                <Divider />
              </>)
            }
            <List.Item
              title="Starred events only"
              right={() => (
                <Switch
                  value={starredEventsOnly}
                  onValueChange={() => this.handleValueChange('starredEventsOnly')}
                />
              )}
            />
            <Divider />
            <List.Item
              title="Remind me"
              disabled={disableReminders}
              right={() => <List.Icon icon="chevron-right" />}
              onPress={openRemindMeDialog}
            />
            <Divider />
          </List.Section>
          <List.Section title="Push notifications">
            <List.Item
              title="Disable"
              right={() => (
                <Switch
                  value={disablePushNotifications}
                  onValueChange={() => this.handleValueChange('disablePushNotifications')}
                />
              )}
            />
          </List.Section>
        </ScrollView>
      </>
    );
  }
}