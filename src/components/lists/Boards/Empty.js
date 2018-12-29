import React from 'react';
import { View } from 'react-native';
import { Headline } from 'react-native-paper';
import styles from './styles';

export default (props) => (
  <View style={styles.empty}>
    <Headline style={styles.emptyTitle}>
    {
      props.search ? "Find a board" : "Follow a board or create a new one"
    }
    </Headline>
  </View>
);
