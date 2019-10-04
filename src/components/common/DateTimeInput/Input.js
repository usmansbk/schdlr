import React from 'react';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Button from './Picker';

class Input extends React.Component {

  state = {
    showPicker: false,
    mode: 'date'
  };

  shouldComponentUpdate = (nextProps, nextState) => (
    (nextProps.value !== this.props.value) ||
    (nextProps.disabled !== this.props.disabled) ||
    (nextState.showPicker !== this.state.showPicker) ||
    (nextState.mode !== this.state.mode)
  );
  
  _formatDate = (date) => moment(date).format('ddd, Do MMM YYYY');
  _formatTime = (time) => moment(time).format('hh:mm a');

  _hidePicker = () => this.setState({ showPicker: false });
  _showPicker = (mode) => this.setState({showPicker : true, mode});

  _datePicker = () => this._showPicker('date');
  _timePicker = () => this._showPicker('time');

  _handleChange = (date) => {
    this.props.onChangeDate(date)
    this._hidePicker();
  };

  render() {
    const {
      disabled,
      noMin,
      stores,
      hideTime
    } = this.props;

    const value = this.props.value || moment().toISOString();
    console.log(value);
    const styles = stores.appStyles.datePicker;

    return (
      <View>
        <View style={styles.date}>
          <Button
            disabled={disabled}
            style={styles.dateButton}
            onPress={this._datePicker}
          >
          {this._formatDate(value)}
          </Button>
          <Button
            disabled={disabled}
            style={styles.timeButton}
            onPress={this._timePicker}
          >
          {hideTime ? '' : this._formatTime(value)}
          </Button>
          <DateTimePicker
            mode={this.state.mode}
            date={moment(value).toDate()}
            minimumDate={noMin ? undefined : moment(value).toDate()}
            isVisible={this.state.showPicker}
            onConfirm={this._handleChange}
            onCancel={this._hidePicker}
            isDarkModeEnabled={stores.settingsStore.dark}
          />
        </View>
      </View>
    );
  }
}

export default inject("stores")(observer(Input));