import React from 'react';
import { View, StyleSheet, NetInfo } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Tabs from './Tabs_Nav';

export default class Search extends React.Component {
  state = {
    query: '',
    isConnected: true
  }

  _handleNetworkChange = (isConnected) => {
    if (this.state.isConnected !== isConnected) {
      this.setState({ isConnected })
    }
  };

  componentDidMount = () => {
    NetInfo.isConnected.fetch().then(this._handleNetworkChange);
    NetInfo.isConnected.addEventListener('connectionChange', this._handleNetworkChange);
  }

  componentWillUnmount = () => {
    NetInfo.isConnected.removeEventListener('connectionChange', this._handleNetworkChange);
  }

  _onChangeText = query => this.setState({ query });

  _goBack = () => this.props.navigation.goBack();

  render() {
    const { query } = this.state;
    return (
      <View style={styles.container}>
        <Searchbar
          icon="arrow-back"
          onIconPress={this._goBack}
          placeholder="Search for..."
          value={this.state.query}
          autoFocus
          onChangeText={this._onChangeText}
          style={styles.searchbar}
        />
        <Tabs
          screenProps={{
            query
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    elevation: 0
  }
});
