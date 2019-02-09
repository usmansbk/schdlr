import React from 'react';
import { FlatList } from 'react-navigation';
import Empty from './Empty';
import Footer from './Footer';
import Item from './Item';
import styles from './styles';

export default class List extends React.Component {
  _renderEmpty = () => <Empty visible />;
  _renderFooter = () => <Footer />;
  _renderItem = () => <Item />;
  render() {
    return (
      <FlatList
        data={[]}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmpty}
        ListFooterComponent={this._renderFooter}
      />
    );
  }
}