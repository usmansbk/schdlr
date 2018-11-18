import React from 'react';
import { View, Picker, ScrollView } from 'react-native';
import {
  Button,
  TextInput,
  Text,
  RadioButton
} from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Formik } from 'formik';
import moment from 'moment';
import styles from './styles';

const defaultValues = {
  name: '',
  description: '',
  location: '',
  startDate: Date.now(),
  startTime: Date.now(),
  endDate: Date.now(),
  endTime: Date.now(),
  allDay: false,
  type: '',
  repeat: '',
  groupId: '',
};

const frequency = [
  { name: 'One-time event', id: 'ONCE' },
  { name: 'Daily', id: 'DAILY' },
  { name: 'Weekly', id: 'WEEKLY' },
  { name: 'Monthly', id: 'MONTHLY' },
  { name: 'Yearly', id: 'YEARLY' }
];
const eventTypes = [
  { name: 'Normal', id: 'EVENT' },
  { name: 'Lecture', id: 'LECTURE' },
  { name: 'Test', id: 'TEST' },
  { name: 'Tutorial', id: 'TUTORIAL' },
  { name: 'Practical', id: 'PRACTICAL' },
  { name: 'Examination', id: 'EXAMINATION' },
  { name: 'Hobby', id: 'HOBBY' },
  { name: 'Study', id: 'STUDY' },
  { name: 'Work', id: 'WORK' },
  { name: 'Sport', id: 'SPORT' },
  { name: 'Meeting', id: 'MEETING' },
  { name: 'Fetival', id: 'FESTIVAL' },
  { name: 'Ceremony', id: 'CEREMONY' },
  { name: 'Competition', id: 'COMPETITION' },
  { name: 'Funfare', id: 'FUNFARE' },
  { name: 'Party', id: 'PARTY' },
  { name: 'Happening', id: 'HAPPENING' },
  { name: 'Interview', id: 'INTERVIEW' },
];

const formatDate = (date) => moment(date).format('ddd, Do MMM YYYY');
const formatTime = (time) => moment(time).format('hh:mm a');

export default class Form extends React.PureComponent {
  state = {
    startDate: false,
    startTime: false,
    endDate: false,
    endTime: false,
  };

  _hidePicker = (name) => this.setState({[name]: false});
  _showPicker = (name) => this.setState({[name]: true});

  render() {
    const { groups=[] } = this.props;
    return (
      <ScrollView>
      <Formik
        initialValues={defaultValues}
        onSubmit={(values, { setSubmitting }) => {
          // this.props.handleSubmit(values);
          alert(JSON.stringify(values));
          setSubmitting(false);
        }}
      >
        {({
          values,
          isSubmitting,
          handleSubmit,
          handleChange,
          setFieldValue
        }) => (
          <View style={styles.container}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Button
                  icon="chevron-left"
                  mode="outlined"
                  onPress={this.props.handleCancel}
                >Cancel</Button>
                <Button
                  loading={isSubmitting}
                  mode="outlined"
                  onPress={handleSubmit}
                >Save</Button>
              </View>
              <TextInput
                placeholder="Event name"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <TextInput
                placeholder="Description"
                value={values.description}
                onChangeText={handleChange('description')}
                style={styles.input}
              />
              <TextInput
                placeholder="Location"
                value={values.location}
                onChangeText={handleChange('location')}
              />
              <Text style={styles.text}>
                From
              </Text>
              <View style={styles.date}>
                <Button
                  style={styles.button}
                  compact
                  mode="outlined"
                  onPress={() => this._showPicker('startDate')}
                >
                {formatDate(values.startDate)}
                </Button>
                <Button
                  compact
                  mode="outlined"
                  onPress={() => this._showPicker('startTime')}
                >
                {formatTime(values.startTime)}
                </Button>
                <DateTimePicker
                  mode="date"
                  date={new Date()}
                  minimumDate={new Date()}
                  isVisible={this.state.startDate}
                  onCancel={() => this._hidePicker('startDate')}
                  onConfirm={(date) => {
                    setFieldValue('startDate', Date.parse(date));
                    this._hidePicker('startDate');
                  }}
                />
                <DateTimePicker
                  mode="time"
                  date={new Date()}
                  minimumDate={new Date()}
                  isVisible={this.state.startTime}
                  onCancel={() => this._hidePicker('startTime')}
                  onConfirm={(date) => {
                    setFieldValue('startTime', Date.parse(date));
                    this._hidePicker('startTime');
                  }}
                />
              </View>
              <Text style={styles.text}>
                To
              </Text>
              <View style={styles.date}>
                <Button
                  disabled={values.allDay}
                  style={styles.button}
                  compact
                  mode="outlined"
                  onPress={() => this._showPicker('endDate')}
                >
                {formatDate(values.endDate)}
                </Button>
                <Button
                  disabled={values.allDay}
                  compact
                  mode="outlined"
                  onPress={() => this._showPicker('endTime')}
                >
                {formatTime(values.endTime)}
                </Button>
                <DateTimePicker
                  mode="date"
                  date={new Date()}
                  minimumDate={new Date()}
                  isVisible={this.state.endDate}
                  onCancel={() => this._hidePicker('endDate')}
                  onConfirm={(date) => {
                    setFieldValue('endDate', Date.parse(date));
                    this._hidePicker('endDate');
                  }}
                />
                <DateTimePicker
                  mode="time"
                  date={new Date()}
                  minimumDate={new Date()}
                  isVisible={this.state.endTime}
                  onCancel={() => this._hidePicker('endTime')}
                  onConfirm={(date) => {
                    setFieldValue('endTime', Date.parse(date));
                    this._hidePicker('endTime');
                  }}
                />
              </View>
              <View style={styles.radio}>
                <Text style={styles.radioText}>All Day</Text>
                <RadioButton
                  value='allDay'
                  onPress={() => {
                    setFieldValue('allDay', !values.allDay)
                  }}
                  status={values.allDay ? 'checked' : 'unchecked'}
                />
              </View>
              <View style={styles.pickerSpacing}>
                <Text style={styles.radioText}>Repetition</Text>
                <Picker
                  prompt="Repeat event"
                  selectedValue={values.repeat}
                  style={styles.picker}
                  onValueChange={itemValue => setFieldValue('repeat', itemValue)}
                >
                  {
                    frequency.map(freq => (
                      <Picker.Item label={freq.name} value={freq.id} />
                    ))
                  }
                </Picker>
              </View>
              <View style={styles.pickerSpacing}>
                <Text style={styles.radioText}>Event group</Text>
                <Picker
                  prompt="Select event group"
                  selectedValue={values.groupId}
                  style={styles.picker}
                  onValueChange={itemValue => setFieldValue('groupId', itemValue)}
                >
                  { (groups.length === 0) ? <Picker.Item label="No event group" value="" /> : 
                    groups.map(group => (
                      <Picker.Item label={group.name} value={group.id} />
                    ))
                  }
                </Picker>
              </View>
              <View style={styles.pickerSpacing}>
                <Text style={styles.radioText}>Event type</Text>
                <Picker
                  prompt="Event type"
                  selectedValue={values.type}
                  style={styles.picker}
                  onValueChange={itemValue => setFieldValue('type', itemValue)}
                >
                  {
                    eventTypes.map(type => (
                      <Picker.Item label={type.name} value={type.id} />
                    ))
                  }
                </Picker>
              </View>
            </View>
          </View>
        )}
      </Formik>
      </ScrollView>
    );
  }
}
