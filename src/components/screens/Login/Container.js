import React from 'react';
import { Auth, Hub } from 'aws-amplify';
import SimpleToast from 'react-native-simple-toast';
import Login from './Login';

export default class Container extends React.Component {
  state = { loading: false };

  componentDidMount = async () => {
    const { stores } = this.props;
    Hub.listen("auth", async ({ payload: { event, data } }) => {
      switch(event) {
        case "signIn":
          const user = await Auth.currentAuthenticatedUser();
          const { signInUserSession: { idToken: { payload } } } = user;
          // SimpleToast.show(`Welcome ${name}!`, SimpleToast.SHORT);
          // alert(`${payload.email} - ${user.username}`);
          alert(JSON.stringify(user));
          break;
      }
    });
  }

  _signInAsync = async (provider) => {
    try {
      this.setState({ loading: true })
      await Auth.federatedSignIn({ provider });
      this.setState({ loading: false });
    } catch (error) {
      SimpleToast.show('Login failed: ' + error.message, SimpleToast.SHORT);
    }
  };

  render() {
    return <Login
      handleLogin={this._signInAsync}
      loading={this.state.loading}
    />;
  }
}
