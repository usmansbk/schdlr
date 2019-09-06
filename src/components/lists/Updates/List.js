import React from 'react';
import { FlatList } from 'react-navigation';
import moment from 'moment';
import Empty from './Empty';
import Footer from './Footer';
import Separator from './Separator';
import Item from './Item';
import { notifications_list } from 'lib/constants';
import getImageUrl from 'helpers/getImageUrl';

const {
  ITEM_HEIGHT,
  SEPARATOR_HEIGHT
} = notifications_list;

export default class List extends React.Component {
  static defaultProps = {
    updates: []
  };

  _renderEmpty = () => <Empty />;
  _renderSeparator = () => <Separator />;
  _keyExtractor = (item, index) => item.id + item.date + index;
  _renderFooter = () => <Footer visible={this.props.updates.length}/>;
  _navigateToEvent = (id) => this.props.navigation.navigate('EventDetails', { id });
  _navigateToSchedule = (id) => this.props.navigation.navigate('ScheduleInfo', { id });
  _navigateToFollowers = (id) => this.props.navigation.navigate('Followers', { id });
  _navigateToBookmarks = (id) => this.props.navigation.navigate('EventBookmarks', { id });
  _getItemLayout = (_, index) => (
    {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index + SEPARATOR_HEIGHT,
      index
    }
  );
  _renderItem = ({ item: {
    id,
    subject,
    message,
    image,
    timestamp,
    topic,
    entityId,
    type
  }}) => <Item
    id={id}
    entityId={entityId}
    subject={subject}
    message={message}
    topic={topic}
    type={type}
    pictureUrl={image && getImageUrl(image)}
    date={moment.unix(timestamp).fromNow()}
    navigateToSchedule={this._navigateToSchedule}
    navigateToEvent={this._navigateToEvent}
    navigateToFollowers={this._navigateToFollowers}
    navigateToBookmarks={this._navigateToBookmarks}
  />;

  render() {
    const { styles, updates } = this.props;
    
    return (
      <FlatList
        data={updates}
        style={styles}
        extraData={moment().format('mm')}
        getItemLayout={this._getItemLayout}
        contentContainerStyle={styles.contentContainer}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmpty}
        ListFooterComponent={this._renderFooter}
        ItemSeparatorComponent={this._renderSeparator}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}