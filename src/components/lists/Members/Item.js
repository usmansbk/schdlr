import React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
import { CachedImage } from 'react-native-cached-image';
import styles, { AVATAR_SIZE } from "./styles";

export default class Item extends React.PureComponent {
  _onPress = () => this.props.onPressItem(this.props.id);
  render() {
    const {
      name,
      pictureUrl
    } = this.props;
    return (
      <TouchableRipple onPress={this._onPress} style={styles.itemContainer}>
        <View>
          <View style={styles.itemLeft}>
            <UserAvatar
              name={name}
              rounded
              size={AVATAR_SIZE}
              component={CachedImage}
              src={pictureUrl}
            />
          </View>
          <View style={styles.itemRight}>
            <Text style={styles.itemText}>{name}</Text>
          </View>
        </View>
      </TouchableRipple>
    )
  }
}