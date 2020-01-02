import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import colors from 'config/colors';
import { badge } from 'lib/constants';

const {
  HEIGHT,
  WIDTH,
  BORDER_RADIUS
} = badge;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: WIDTH,
    borderRadius: BORDER_RADIUS,
    position: 'absolute',
    top: 17,
    right: 8,
    borderWidth: 1,
    borderColor: 'white'
  },
  cancelled: {
    backgroundColor: colors.error,
  },
  ongoing: {
    backgroundColor: colors.success
  },
  done: {
    backgroundColor: colors.tint
  },
  concluded: {
    backgroundColor: colors.tint
  },
  upcoming: {
    backgroundColor: colors.warning,
  },
});

export default ({ status }) => {
  let statusStyle = styles[status];
  return (
    <View
      style={[styles.container, statusStyle]}
    />
  )
}