import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  Headline,
  Button
} from 'react-native-paper';

export default (props) => (
  <View style={styles.container}>
    <Headline style={styles.headline}>
      Something went wrong. Please try again
    </Headline>
    <View style={styles.content}>
      <Button
        icon="refresh"
        onPress={props.onRefresh}
        mode="outlined"
      >
        Try again
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  headline: {
    textAlign: 'center',
  },
  content: {
    margin: 16
  }
})