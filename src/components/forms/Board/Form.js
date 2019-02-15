import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import isEqual from 'lodash.isequal';
import {
  Button,
  TextInput,
  Text,
  HelperText,
  Switch,
  Appbar
} from 'react-native-paper';
import { Formik } from 'formik';
import validationSchema from './schema';
import styles, { navButtonColor } from './styles';
import { requestLocationPermission } from '../../../helpers/permissions';

export default class Form extends React.Component {

  static defaultProps = {
    initialValues: {
      name: '',
      description: '',
      isPublic: true,
    }
  };
  
  componentDidMount = () => {
    if (requestLocationPermission()) {
      Geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: {
              longitude,
              latitude
            }
          } = position;
          alert(`Latitude: ${latitude} - Longitude: ${longitude}`);
        },
        (error) => {
          alert(error.message)
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000
        }
      )
    }
  };

  render() {
    const {
      initialValues,
      handleCancel,
      onSubmit,
      edit,
    } = this.props;

    return (
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const input = {
            ...values,
            name: values.name.trim(),
            description: values.description.trim(),
          };
          onSubmit && await onSubmit(input);
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
          <React.Fragment>     
          <Appbar.Header style={styles.header}>
            <Button
              mode="outlined"
              color={navButtonColor}
              onPress={handleCancel}
            >Cancel</Button>
            <Button
              loading={isSubmitting}
              disabled={!isValid || isSubmitting || isEqual(initialValues, values)}
              mode="outlined"
              color={navButtonColor}
              onPress={submitForm}
            >{ edit ? 'Save' : 'Create'}</Button>
          </Appbar.Header>
          <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => resetForm()} />}>
            <View style={styles.form}>
              <TextInput
                placeholder="Board name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                mode="outlined"
              />
              <HelperText
                type="error"
                visible={errors.name && touched.name}
              >
              {errors.name}
              </HelperText>
              <TextInput
                placeholder="Description"
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                mode="outlined"
              />
              <HelperText
                type="error"
                visible={errors.description && touched.description}
              >
              {errors.description}
              </HelperText>
              <View style={styles.switchButton}>
                <Text style={styles.text}>Public</Text>
                <Switch
                  value={values.isPublic}
                  onValueChange={() => setFieldValue('isPublic', !values.isPublic)}
                />
              </View>
              <HelperText
                type="info"
                visible={!values.isPublic}
              >
                Users won't be able to search for this board. Users can still follow board via invitation link.
              </HelperText>
            </View>
          </ScrollView>
          </React.Fragment>
        )}
      </Formik>
    );
  }
}