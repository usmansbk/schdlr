import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal
} from 'react-native-paper';

export default ({
  visible,
  handleDismiss,
  loading,
  onConfirm
}) => (
  <Portal>
    <Dialog
      dismissable={!loading}
      visible={visible}
      onDismiss={handleDismiss}
    >
      <Dialog.Title>Sign out?</Dialog.Title>
      <Dialog.Content>
        <Paragraph>Will clear data</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button disabled={loading} onPress={handleDismiss}>Dismiss</Button>
        <Button loading={loading} disabled={loading} onPress={handleDismiss}>Continue</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
)