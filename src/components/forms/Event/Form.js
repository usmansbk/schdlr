import React from 'react';
import moment from "moment";
import isEqual from 'lodash.isequal';
import {
  View,
  Picker,
  ScrollView,
  RefreshControl
} from 'react-native';
import {
  Button,
  TextInput,
  Text,
  HelperText,
  Appbar,
  Switch,
  Divider
} from 'react-native-paper';
import { Formik } from 'formik';
import { inject, observer } from 'mobx-react';
import { I18n } from 'aws-amplify';
import DateTimeInput from 'components/common/DateTimeInput';
import PickerInputModal from 'components/common/PickerInputModal';
import PickerButton from 'components/common/PickerButton';
import Alert from 'components/dialogs/Alert';
import {
  isEventValid,
  canRepeat
} from 'lib/formValidator';
import { getRepeatLabel, getTimeUnit } from 'lib/time';
import formSchema from './schema';
import recurrence from './recurrence';
import buildForm from 'helpers/buildForm';

class Form extends React.Component {

  state = {
    showPicker: false,
    showScheduleHelpAlert: false,
  };

  _showModal = () => this.setState({ showPicker: true });
  _hideModal = () => this.setState({ showPicker: false, showScheduleHelpAlert: false });
  _scheduleHelp = () => this.setState({ showScheduleHelpAlert: true });

  componentDidMount = () => {
    this.fetchLocation = setTimeout(this.props.stores.locationStore.fetchLocation, 200);
  };

  componentWillUnmount = () => clearTimeout(this.fetchLocation);

  static defaultProps = {
    schedules: [], 
    initialValues: {
      title: '',
      description: null,
      venue: null,
      startAt: moment().toISOString(),
      endAt: moment().add(2, 'hours').toISOString(),
      allDay: false,
      category: 'Normal',
      recurrence: recurrence[0].id,
      until: null,
      forever: false,
      eventScheduleId: null,
      isPublic: true
    }
  };

  render() {
    const {
      schedules,
      locked,
      initialValues,
      onSubmit,
      handleCancel,
      edit,
      isNew,
      stores
    } = this.props;
    const { showPicker, showScheduleHelpAlert } = this.state;

    const styles = stores.appStyles.eventForm;
    const navButtonColor = stores.themeStore.colors.primary;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={async (values, { setSubmitting }) => {
          if (isEventValid(values)) {
            const input = buildForm(values);
            input.location = stores.locationStore.location;
            onSubmit && await onSubmit(input);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          submitForm,
          handleChange,
          handleBlur,
          setFieldValue,
          resetForm,
          initialValues,
          isValid
        }) => (
          <>
          <Appbar.Header style={styles.header}>
            <Button
              mode="outlined"
              onPress={handleCancel}
              color={navButtonColor}
              uppercase
            >{I18n.get("BUTTON_cancel")}</Button>
            <Button
              loading={isSubmitting}
              disabled={!isNew && (!isValid || isSubmitting || isEqual(initialValues, values))}
              mode="outlined"
              color={navButtonColor}
              onPress={submitForm}
              uppercase
            >{ edit ? I18n.get("BUTTON_save") : I18n.get("BUTTON_create")}</Button>
          </Appbar.Header>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={resetForm}
                colors={[stores.themeStore.colors.primary]}
                progressBackgroundColor={stores.themeStore.colors.bg}
              />
            }
            style={styles.container}
          >
            <View style={styles.form}>
              <TextInput
                placeholder={I18n.get("EVENT_FORM_title")}
                label={I18n.get("EVENT_FORM_title")}
                value={values.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                mode="outlined"
              />
              <HelperText
                type="error"
                visible={errors.title && touched.title}
              >
              {errors.title && I18n.get(`HELPER_TEXT_${errors.title}`)}
              </HelperText>
              <TextInput
                placeholder={I18n.get("EVENT_FORM_description")}
                label={I18n.get("EVENT_FORM_description")}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                mode="outlined"
              />
              <HelperText
                type="error"
                visible={errors.description && touched.description}
              >
              {errors.description && I18n.get(`HELPER_TEXT_${errors.description}`)}
              </HelperText>
              <TextInput
                placeholder={stores.locationStore.location || I18n.get("EVENT_FORM_venue")}
                label={I18n.get("EVENT_FORM_venue")}
                value={values.venue}
                onChangeText={handleChange('venue')}
                onBlur={handleBlur('venue')}
                mode="outlined"
              />
              <HelperText
                type="error"
                visible={errors.venue && touched.venue}
              >
              {errors.venue && I18n.get(`HELPER_TEXT_${errors.venue}`)}
              </HelperText>
              
              <View style={[styles.pickerSpacing, styles.firstPicker]}>
                <Text style={styles.radioText}>{I18n.get("EVENT_FORM_category")}</Text>
                <PickerButton
                  value={values.category}
                  onPress={this._showModal}
                />
              </View>
              <View style={styles.pickerSpacing}>
                <Text style={styles.radioText}>{I18n.get("EVENT_FORM_from")}</Text>
                <DateTimeInput
                  noMin
                  disabled={values.allDay}
                  value={values.startAt}
                  hideTime={values.allDay}
                  onChangeDate={(date) => {
                    const prevStartAt = moment(values.startAt);
                    const prevEndAt = moment(values.endAt);

                    setFieldValue('startAt', date);
                    if (values.allDay) {
                      setFieldValue('endAt', moment(date).endOf('day').toISOString());
                    } else {
                      const prevDuration = Math.abs(prevEndAt.valueOf() - prevStartAt.valueOf());
                      const newEnd = moment(date).add(prevDuration, 'milliseconds').toISOString();
                      setFieldValue('endAt', newEnd);
                    }
                  }}
                />
              </View>
              <View style={styles.pickerSpacing}>
                <Text style={styles.radioText}>{I18n.get("EVENT_FORM_to")}</Text>
                <DateTimeInput
                  noMin
                  value={values.endAt}
                  disabled={values.allDay}
                  hideTime={values.allDay}
                  onChangeDate={(date) => setFieldValue('endAt', date)}
                />
              </View>
              <View style={styles.radio}>
                <Text style={styles.radioText}>{I18n.get("EVENT_FORM_allDay")}</Text>
                <Switch
                  value={values.allDay}
                  onValueChange={() => {
                    const { allDay } = values;
                    setFieldValue('allDay', !allDay);
                    if (!allDay) {
                      setFieldValue('startAt', moment(values.startAt).startOf('day').toISOString());
                      setFieldValue('endAt', moment(values.startAt).endOf('day').toISOString());
                    }
                  }}
                />
              </View>
              <Divider />
              <View style={styles.pickerSpacing}>
                <Text style={styles.radioText}>{I18n.get("EVENT_FORM_repetition")}</Text>
                <Picker
                  prompt={I18n.get("EVENT_FORM_repeat")}
                  selectedValue={values.recurrence}
                  style={styles.picker}
                  
                  itemStyle={styles.pickerItem}
                  onValueChange={itemValue => {
                    setFieldValue('recurrence', itemValue);
                    if (itemValue === recurrence[0].id) {
                      setFieldValue('until', null);
                      setFieldValue('forever', false);
                    } else if (values.until) {
                      const unit = getTimeUnit(itemValue);
                      setFieldValue('until', moment(values.startAt).add(1, unit).toISOString());
                    }
                  }}
                >
                  {
                    recurrence.map(recur => (
                      <Picker.Item
                        key={recur.id}
                        label={getRepeatLabel(recur.id, values.startAt)}
                        value={recur.id}
                      />
                    ))
                  }
                </Picker>
                {
                  (!canRepeat(values)) && (
                    <HelperText
                      type="error"
                      visible={true}
                    >
                      {I18n.get("HELPER_TEXT_invalidDatesAndRecur")}
                    </HelperText>
                  )
                }
              </View>
              <Divider />
              {
                (values.recurrence !== recurrence[0].id) && (
                  <>
                    <View style={styles.radio}>
                      <Text style={styles.radioText}>{I18n.get("EVENT_FORM_repeatForever")}</Text>
                      <Switch
                        value={values.forever}
                        onValueChange={() => {
                          const forever = values.forever;
                          if (!forever) {
                            setFieldValue('until', null);
                          } else {
                            const unit = getTimeUnit(values.recurrence);
                            setFieldValue('until', moment(values.startAt).add(2, unit).toISOString());
                          }
                          setFieldValue('forever', !forever);
                        }}
                      />
                    </View>
                    <Divider />
                  </>
                )
              }
              {
                (values.recurrence !== recurrence[0].id && !values.forever) && (
                  <View style={styles.pickerSpacing}>
                    <Text style={styles.radioText}>{I18n.get("EVENT_FORM_repeatUntil")}</Text>
                    <DateTimeInput
                      noMin
                      value={values.until}
                      onChangeDate={(date) => setFieldValue('until', date)}
                    />
                  </View>
                )
              }
              <View style={styles.radio}>
                <Text style={styles.radioText}>{I18n.get("EVENT_FORM_public")}</Text>
                <Switch
                  value={values.isPublic}
                  onValueChange={() => {
                    const { isPublic } = values;
                    setFieldValue('isPublic', !isPublic);
                  }}
                />
              </View>
              <Divider />
              <View style={styles.pickerSpacing}>
                <View style={styles.row}>
                  <Text style={styles.radioText}>{I18n.get("EVENT_FORM_schedule")}</Text>
                  <Text style={styles.radioText} onPress={this._scheduleHelp}>{I18n.get("BUTTON_help")}</Text>
                </View>
                <Picker
                  prompt={I18n.get("EVENT_FORM_selectASchedule")}
                  selectedValue={values.eventScheduleId}
                  style={styles.picker}
                  enabled={!locked }
                  itemStyle={styles.pickerItem}
                  onValueChange={itemValue => setFieldValue('eventScheduleId', itemValue)}
                >
                  {
                    schedules.map(schedule => (
                      <Picker.Item key={schedule.id} label={schedule.name} value={schedule.id} />
                    ))
                  }
                </Picker>
                <HelperText
                  type="error"
                  visible={errors.eventScheduleId && touched.eventScheduleId}
                >
                {errors.eventScheduleId && I18n.get(`HELPER_TEXT_required`)}
                </HelperText>
              </View>
            </View>
          </ScrollView>
          
          <PickerInputModal
            visible={showPicker}
            prompt={I18n.get("EVENT_FORM_category")}
            selectedValue={values.category || ''}
            hideModal={this._hideModal}
            onValueChange={itemValue => setFieldValue('category', itemValue)}
          />
          <Alert
            visible={showScheduleHelpAlert}
            title={I18n.get("ALERT_whatIsASchedule")}
            message={I18n.get("ALERT_whatIsAScheduleA")}
            handleDismiss={this._hideModal}
          />
          </>
        )}
      </Formik>
    );    
  }
}

export default inject("stores")(observer(Form));