import React from 'react';
import { Auth } from'aws-amplify';
import { withNavigation } from 'react-navigation';
import { inject, observer } from 'mobx-react';
import Dialog from './Dialog';

class Container extends React.Component {
  state = {
    loading: false,
  };

  _signOut = async () => {
    this.setState({ loading: true });
    Auth.signOut().then(this.props.stores.reset);
    this._handleDismiss();
  };

  _handleDismiss = () => this.props.handleDismiss();

  render() {
    return (
      <Dialog
        visible={this.props.visible}
        loading={this.state.loading}
        handleDismiss={this._handleDismiss}
        handleLogout={this._signOut}
      />
    );
  }
}

const withStores = inject("stores")(observer(Container));

export default withNavigation(withStores);