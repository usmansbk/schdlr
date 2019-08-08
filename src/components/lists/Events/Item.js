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
import Badge from 'components/common/Badge';
import ActionSheet from 'components/actionsheet/Event';
import { events } from 'lib/constants';
import { formatDate } from 'lib/time';

class Item extends React.Component {
  _onPress = () => this.props.onPressItem(this.props.id, this.props.startAt, this.props.endAt);
  _onLongPress = () => {
    this.ActionSheet && this.ActionSheet.showActionSheet();
  };
  _onMute = () => {
    this.props.stores.appState.toggleMute(this.props.id, this.props.isMuted);
  };
  _navigateToSchedule = () => {
    this.props.scheduleId ? this.props.navigateToScheduleEvents(this.props.scheduleId) : (
      this._onPress()
    );
  };

  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.title !== this.props.title ||
      nextProps.time !== this.props.time ||
      nextProps.status !== this.props.status ||
      nextProps.recur !== this.props.recur ||
      nextProps.category !== this.props.category ||
      nextProps.isBookmarked !== this.props.isBookmarked
    );
  };

  render() {
    const {
      id,
      title,
      recur,
      time,
      startAt,
      endAt,
      allDay,
      duration,
      status,
      category,
      address,
      pictureUrl,
      stores,
      isBookmarked,
      bookmarksCount,
      scheduleId
    } = this.props;

    const styles = stores.appStyles.eventsList;
    const isMuted = stores.appState.mutedList.includes(id) ||
    (scheduleId && stores.appState.mutedList.includes(scheduleId)) &&
    !stores.appState.allowedList.includes(id);
    
    const isPending = id[0] === '-';
    return (
      <TouchableRipple
        onPress={this._onPress}
        style={styles.itemContainer}
        onLongPress={this._onLongPress}
      >
        <View useNativeDriver style={styles.itemContentSmall}>
          <View style={styles.left}>
            <Avatar
              size={events.AVATAR_SIZE}
              name={title}
              src={pictureUrl}
              onPress={this._navigateToSchedule}
            />
            <Badge status={status} isMuted={isMuted} />
          </View>
          <View style={styles.right}>
            <View style={styles.itemBody}>
              <Headline
                style={isPending ? styles.offlineTitle : styles.itemHeadline}
                numberOfLines={1}
                ellipsizeMode="tail">
                {title}
              </Headline>
              <Text style={styles.time}>{time}</Text>
              <Caption
                ellipsizeMode="tail"
                numberOfLines={1}
              >{duration ? duration : ''} {category} {recur}</Caption>
            </View>
          </View>
          <ActionSheet
            id={id}
            title={title}
            category={category}
            date={formatDate(startAt, endAt, allDay)}
            address={address}
            isBookmarked={isBookmarked}
            startAt={startAt}
            isMuted={isMuted}
            bookmarksCount={bookmarksCount}
            ref={ref => this.ActionSheet = ref}
            onMute={this._onMute}
          />
        </View>
      </TouchableRipple>
    );
  }
}

export default inject("stores")(observer(Item));