import React from 'react';
import { View } from 'react-native';
import {
  TouchableRipple,
  Text,
  Caption,
  Headline,
} from 'react-native-paper';
import { inject, observer } from 'mobx-react';
import Tag from 'components/common/Tag';
import Avatar from 'components/common/UserAvatar';
import Actions from 'components/common/Actions';
import { bookmarkedEvents } from 'lib/constants';
import { captionDetails } from 'lib/parseItem';

const { AVATAR_SIZE } = bookmarkedEvents;

class Item extends React.Component {
  _onPress = () => this.props.onPressItem(this.props.id, this.props.startAt, this.props.endAt);
  _onPressComment = () => this.props.onPressComment(this.props.id, this.props.title, this.props.time);
  _onPressAvatar = () => {
    const { scheduleId } = this.props;
    scheduleId ? this.props.navigateToInfo(scheduleId) : this._onPress();
  };
  shouldComponentUpdate = (nextProps) => {
    return (
      this.props.title !== nextProps.title ||
      this.props.time !== nextProps.time ||
      this.props.status !== nextProps.status ||
      this.props.category !== nextProps.category ||
      this.props.isBookmarked !== nextProps.isBookmarked ||
      this.props.commentsCount !== nextProps.commentsCount ||
      this.props.address !== nextProps.address ||
      this.props.isAuth !== nextProps.isAuth
    );
  };

  render() {
    const {
      id,
      title,
      recurrence,
      time,
      status,
      allDay,
      duration,
      category,
      isAuth,
      pictureUrl,
      isBookmarked,
      bookmarksCount,
      commentsCount,
      address,
      scheduleId,
      stores
    } = this.props;

    const styles = stores.appStyles.searchEventsList;
    const caption = captionDetails({
      allDay,
      recurrence,
      category,
      duration
    });

    return (
      <TouchableRipple
        onPress={this._onPress}
        style={styles.itemContainer}
      >
        <View useNativeDriver style={styles.itemContent}>
          <View style={styles.left}>
            <Avatar
              size={AVATAR_SIZE}
              name={title}
              src={pictureUrl}
              onPress={this._onPressAvatar}
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
              {
                Boolean(caption) && (
                  <Caption numberOfLines={1}
                    ellipsizeMode="tail"
                  >{caption}</Caption>
                )
              }
              <Tag status={status} /> 
            </View>
            <Actions
              id={id}
              title={title}
              address={address}
              isBookmarked={isBookmarked}
              isAuth={isAuth}
              bookmarksCount={bookmarksCount}
              commentsCount={commentsCount}
              color={stores.themeStore.colors.light_gray_3}
              activeColor={stores.themeStore.colors.like}
              navigateToComments={this._onPressComment}
              bookmarkScheduleId={scheduleId}
              size={18}
              small
            />
          </View>
        </View>
      </TouchableRipple>
    );
  }
}

export default inject("stores")(observer(Item));