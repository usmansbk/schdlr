import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {inject, observer} from 'mobx-react';
import Icon from '../../Icon';

export default inject('stores')(
  observer(({stores, leftIcon, value, onPress, placeholder}) => {
    const styles = stores.styles.picker;

    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftIcon && (
            <Icon
              color={stores.theme.colors.tint}
              name={leftIcon}
              size={24}
              style={{marginRight: 8}}
            />
          )}
          <Text style={styles.text}>{value || placeholder}</Text>
        </View>
      </TouchableOpacity>
    );
  }),
);
