import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { dark as colors } from 'config/colors';

export default inject("stores")(observer(({error, stores, label, bold, ...rest}) => {
  const styles= stores.appStyles.textInput;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={stores.themeStore.colors.placeholder}
        autoCorrect={false}
        underlineColorAndroid={error && stores.themeStore.colors.light_red}
        style={[styles.input, bold ? { fontWeight: "bold", fontSize: 25 } : null]}
        {...rest}
      />
    </View>
  );
}));

const styles = StyleSheet.create({
  container: {
    marginVertical: 10 
  },
  input: {
    // backgroundColor: colors.gray,
    backgroundColor: colors.bg,
    // height: 56,
    padding: 8,
    margin: 0,
    fontSize: 18,
    color: colors.black
  },
  label: {
    marginLeft: 8,
    color: colors.black
  }
});