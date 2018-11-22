import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../../config/colors';

export default class Button extends React.Component {
  render() {
    const { loading, onPress } = this.props;
    return (
      <TouchableRipple
        disabled={loading}
        onPress={onPress}
        style={styles.loginButton}
      >
        <View style={styles.button}>
          <Image style={styles.logo} source={require('./img/logo.png')} />
          <Text style={styles.loginText}>Sign in with Google</Text>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    marginVertical: 4,
    width: 250,
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.google,
    height: 48,
    elevation: 2,
    borderRadius: 2
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 2
  }
})

