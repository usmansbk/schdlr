import React from 'react';
import { Text } from 'react-native-paper';
import { inject, observer } from 'mobx-react';

export default inject('stores')(observer(
  ({ status, stores }) => {
    const styles = stores.appStyles.tag;
    let statusStyle = styles[status];
    return (
      <Text style={[styles.text, statusStyle]}>{status}</Text>
    );
  }
));