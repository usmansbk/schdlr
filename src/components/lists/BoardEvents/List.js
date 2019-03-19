import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import { withNavigationFocus, FlatList } from 'react-navigation';
import Item from './Item';
import Separator from './Separator';
import Footer from './Footer';
import Empty from './Empty';
import {
  getDuration,
  getHumanTime,
  parseRepeat
} from '../../../lib/parseItem';
import { sortEvents } from '../../../lib/utils';
import { decapitalize } from '../../../lib/capitalizr';
import styles, {
  ITEM_HEIGHT,
  SEPARATOR_HEIGHT
} from './styles';
import colors from '../../../config/colors';

class List extends Component {
  static defaultProps = {
    events: [],
    loading: false,
    onRefresh: () => null
  };
  _getItemLayout = (_, index) => (
    {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index + SEPARATOR_HEIGHT,
      index
    }
  );
  shouldComponentUpdate = (nextProps) => nextProps.navigation.isFocused;
  _onPressItem = (id) => this.props.navigation.navigate('EventDetails', { id });
  _keyExtractor = (item) => String(item.id);

  _renderItem = ({ item: {
    id,
    title,
    eventType,
    startAt,
    endAt,
    repeat,
    board,
    allDay,
  }}) => (<Item
    id={id}
    title={title}
    startAt={startAt}
    endAt={endAt}
    eventType={decapitalize(eventType)}
    repeat={parseRepeat(repeat)}
    time={getHumanTime({ allDay, startAt, endAt })}
    boardId={board.id}
    duration={getDuration(startAt, endAt, eventType)}
    onPressItem={this._onPressItem}
  />);

  _renderEmptyList = () => <Empty error={this.props.error} loading={this.props.loading} />;
  _renderSeparator = () => <Separator />;
  _renderFooter = () => <Footer visible={this.props.events.length} />;

  render() {
    const {
      events,
      loading,
      onRefresh,
    } = this.props;

    return (
      <FlatList
        refreshing={loading}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={loading}
            colors={[colors.primary]}
          />
        }
        onRefresh={onRefresh}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        initialNumToRender={5}
        extraData={events.length}
        getItemLayout={this._getItemLayout}
        ItemSeparatorComponent={this._renderSeparator}
        keyExtractor={this._keyExtractor}
        data={sortEvents(events)}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmptyList}
        ListFooterComponent={this._renderFooter}
      />
    )
  }
}

export default withNavigationFocus(List);