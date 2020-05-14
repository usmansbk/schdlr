import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import isEqual from 'lodash.isequal';
import {
  Button,
  TextInput,
  Text,
  HelperText,
  Switch,
  Appbar,
  Caption
} from 'react-native-paper';
import Alert from 'components/dialogs/Alert';
import LocationPicker from 'components/common/LocationPicker';
import { PickerInput, CustomPicker } from 'components/common/Picker';
import { Formik } from 'formik';
import { inject, observer } from 'mobx-react';
import { I18n } from 'aws-amplify';
import Suspense from 'components/common/Suspense';
import schema from './schema';

class Form extends React.Component {
  static defaultProps = {
    initialValues: {
      name: '',
      description: '',
      location: null,
      isPublic: true,
      topic: '',
    }
  };

  state = {
    showInfoAlert: false,
    showPrivacyAlert: false,
    showLocationPicker: false,
    display: false
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({
      display: true
    }), 0);
    setTimeout(
      this.props.stores.locationStore.fetchLocation, 0);
  };

  _showInfoAlert = () => this.setState({ showInfoAlert: true });
  _showPrivacyAlert = () => this.setState({ showPrivacyAlert: true });
  _hideDialog = () => {
    this.setState({
      showInfoAlert: false,
      showPrivacyAlert: false,
      showLocationPicker: false,
    });
  };

  render() {
    if (!this.state.display) return <Suspense />;
    const {
      initialValues,
      handleCancel,
      onSubmit,
      edit,
      stores
    } = this.props;

    initialValues.location = initialValues.location ? initialValues.location : stores.locationStore.location;
    const styles = stores.appStyles.scheduleForm;
    const navButtonColor = stores.themeStore.colors.primary;
    
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          values.geo_point = stores.locationStore.point;
          const castVal = schema.cast(values);
          onSubmit && onSubmit(castVal);
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
          initialValues,
          isValid
        }) => (
          <>     
          <Appbar.Header style={styles.header} collapsable>
            <Button
              mode="outlined"
              color={navButtonColor}
              onPress={handleCancel}
              uppercase
            >{I18n.get("BUTTON_cancel")}</Button>
            <Button
              loading={isSubmitting}
              disabled={!isValid || isSubmitting || isEqual(initialValues, values)}
              mode="outlined"
              color={navButtonColor}
              onPress={submitForm}
              uppercase
            >{ edit ? I18n.get("BUTTON_save") : I18n.get("BUTTON_create")}</Button>
          </Appbar.Header>
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="always"
          >
            <View style={styles.form}>
              <TextInput
                label={I18n.get("SCHEDULE_FORM_name")}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                underlineColor="transparent"
                autoFocus
                style={styles.textInput}
                theme={{roundness: 0}}
              />
              <HelperText
                type="error"
                visible={errors.name && touched.name}
              >
              {errors.name && I18n.get(`HELPER_TEXT_${errors.name}`)}
              </HelperText>
              <View style={{paddingLeft: 10}}>
                <Text
                  style={
                    [styles.text, { marginVertical: 4 }]}
                   >{I18n.get("SCHEDULE_FORM_topic")}</Text>
                <CustomPicker
                  value={values.topic}
                  prompt={I18n.get("SCHEDULE_FORM_selectTopic")}
                  data={I18n.get('topics')}
                  onValueChange={handleChange('topic')}
                />
                <View style={styles.switchButton}>
                  <Text style={styles.text}>{I18n.get("SCHEDULE_FORM_public")}</Text>
                  <Switch
                    value={values.isPublic}
                    onValueChange={(value) => {
                      const isPublic = values.isPublic;
                      if (isPublic) this._showPrivacyAlert();
                      setFieldValue('isPublic', value);
                    }}
                  />
                </View>
                <View style={{marginVertical: 16}}>
                  <Text style={styles.text}>{I18n.get("SCHEDULE_FORM_location")}</Text>
                  <PickerInput
                    value={values.location}
                    onPress={() => this.setState({ showLocationPicker: true })}
                  />
                </View>
              </View>
              <TextInput
                label={I18n.get("SCHEDULE_FORM_description")}
                value={values.description}
                multiline
                maxHeight={120}
                underlineColor="transparent"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                style={styles.textInput}
                theme={{roundness: 0}}
              />
              <HelperText
                type="error"
                visible={errors.description && touched.description}
              >
              {errors.description && I18n.get(`HELPER_TEXT_${errors.description}`)}
              </HelperText>
              <View style={styles.info}>
                <Caption
                  style={styles.primary}
                  onPress={this._showInfoAlert}>{I18n.get("SCHEDULE_whatIsASchedule")}</Caption>
              </View>
            </View>
          </ScrollView>
          <LocationPicker
            visible={this.state.showLocationPicker}
            hideModal={this._hideDialog}
            onSelect={handleChange('location')}
          />
          <Alert
            title={I18n.get("ALERT_whatIsASchedule")}
            message={I18n.get("ALERT_whatIsAScheduleA2")}
            visible={this.state.showInfoAlert}
            handleDismiss={this._hideDialog}
          />
          <Alert
            title={I18n.get("ALERT_privateSchedule")}
            message={I18n.get("ALERT_privateScheduleA")}
            visible={this.state.showPrivacyAlert}
            handleDismiss={this._hideDialog}
          />
          </>
        )}
      </Formik>
    );
  }
}

export default inject("stores")(observer(Form));