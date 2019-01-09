import React from 'react';
import { View } from 'react-native';
import {
  TouchableRipple,
  Text,
} from 'react-native-paper';
import Avatar from 'react-native-user-avatar';
import { CachedImage } from 'react-native-cached-image';
import Actions from '../../common/Actions';
import styles, {
  ITEM_HEIGHT,
  ITEM_HEIGHT_2,
  AVATAR_SIZE,
} from './styles';

const REMINDER = 'REMINDER';

export default class Item extends React.PureComponent {
  _onPress = () => this.props.onPressItem(this.props.id);
  _navigateToBoard = () => this.props.navigateToBoardEvents(this.props.boardId);
  _onPressComment = () => this.props.onPressCommentButton(this.props.id);

  render() {
    const {
      id,
      title,
      location,
      repeat,
      startTime,
      endTime,
      duration,
      status,
      date,
      allDay,
      eventType,
      starsCount,
      commentsCount,
      boardName,
      pictureUrl,
      isStarred,
    } = this.props;
    const [ first, second ] = boardName.split(' ');
    const avatarName = `${first} ${second ? second : ''}`;
    const isOffline = id[0] === '-';
    const statusStyle = status === 'Cancelled' ? styles.red : styles.status;
    const repeatEvent = repeat && (repeat + ' · ');
    
    return (
      <TouchableRipple
        onPress={this._onPress}
        style={styles.itemContainer}
      >
        <View style={styles.itemContent}>
          <View style={styles.left}>
            <TouchableRipple onPress={this._navigateToBoard}>
              <Avatar
                component={CachedImage}
                rounded
                size={AVATAR_SIZE}
                name={avatarName}
                src={pictureUrl}
              />
            </TouchableRipple>
          </View>
          <View style={styles.right}>
            <View style={styles.itemBody}>
              <View style={styles.body}>
                <Text style={isOffline ? styles.offlineTitle : styles.itemHeadline} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                <Text style={styles.duration}>{duration} {eventType}</Text>
                <Text style={styles.status}>{repeatEvent}<Text style={statusStyle}>{status}</Text></Text>
              </View>
              <View>
                <Text style={styles.time}>{startTime}</Text>
                {
                  !allDay && (eventType !== REMINDER) && (
                    <Text style={styles.time}>{endTime}</Text>
                  )
                }
              </View>
            </View>
            <Actions
              id={id}
              date={date}
              title={title}
              location={location}
              eventType={eventType}
              isStarred={isStarred}
              starsCount={starsCount}
              commentsCount={commentsCount}
              navigateToComments={this._onPressComment}
              size="small"
              dark
            />
          </View>
        </View>
      </TouchableRipple>
    );
  }
}