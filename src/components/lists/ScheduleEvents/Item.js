import React from 'react';
import { View } from 'react-native';
import {
  TouchableRipple,
  Text,
  Caption,
  Headline,
} from 'react-native-paper';
import { inject, observer } from 'mobx-react';
import Avatar from 'components/common/UserAvatar';
import Tag from 'components/common/Tag';
import { schedule_events } from 'lib/constants';

const {
  AVATAR_SIZE,
} = schedule_events;

class Item extends React.Component {
  _onPress = () => this.props.onPressItem(this.props.id, this.props.startAt, this.props.endAt);
  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.title !== this.props.title ||
      nextProps.time !== this.props.time ||
      nextProps.status !== this.props.status ||
      nextProps.repeat !== this.props.repeat ||
      nextProps.eventType !== this.props.eventType
    );
  }
  render() {
    const {
      title,
      repeat,
      time,
      duration,
      eventType,
      pictureUrl,
      status,
      stores
    } = this.props;

    const styles = stores.appStyles.scheduleEvents;

    return (
      <TouchableRipple
        onPress={this._onPress}
        style={styles.itemContainer}
      >
        <View useNativeDriver style={styles.itemContentSmall}>
          <View style={styles.left}>
            <Avatar
              size={AVATAR_SIZE}
              name={title}
              src={pictureUrl}
            />
          </View>
          <View style={styles.right}>
            <View style={styles.itemBody}>
              <Headline
                style={styles.itemHeadline}
                numberOfLines={1}
                ellipsizeMode="tail">
                {title}
              </Headline>
              <Text style={styles.time}>{time}</Text>
              <Caption numberOfLines={1}
                ellipsizeMode="tail"
              >{duration ? duration : ''} {eventType} {repeat}</Caption>
              <Tag status={status} /> 
            </View>
          </View>
        </View>
      </TouchableRipple>
    );
  }
}

export default inject("stores")(observer(Item));