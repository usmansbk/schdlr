import React from 'react';
import {
  Button,
  Dialog,
  Portal
} from 'react-native-paper';

export default class DeleteBoard extends React.Component {
  state = {
    loading: false
  };
  
  shouldComponentUpdate = (nextProps, nextState) => (
    nextProps.visible !== this.props.visible ||
    nextState.loading !== this.state.loading
  );

  _onContinue = async () => {
    const {
      id,
      onSubmit,
    } = this.props;
    this.setState({ loading: true });
    try {
      await onSubmit({
        id
      });
      this.props.navigation.popToTop();
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      visible,
      handleDismiss,
    } = this.props;

    const { loading } = this.state;

    return (
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={handleDismiss}
        >
          <Dialog.Title>Delete board?</Dialog.Title>
          <Dialog.Actions>
            <Button disabled={loading} onPress={handleDismiss}>Dismiss</Button>
            <Button loading={loading} disabled={loading} onPress={this._onContinue}>Continue</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    )
  }
}