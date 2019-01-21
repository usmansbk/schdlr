import React from 'react';
import { Formik } from 'formik';
import { View, TextInput } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
import { CachedImage } from 'react-native-cached-image';
import styles, { AVATAR_SIZE } from './styles';

export default class CommentInput extends React.Component {
  state = {
    isSubmitting: false,
    message: ''
  };

  _onSubmit = () => {
    this.setState({ isSubmitting: true });
    // this.props.handleSubmit({
    //   content: message
    // });
    this.setState({
      isSubmitting: false,
      message: ''
    });
  };

  _onChangeText = (message) => this.setState({ message })

  focusInput = () => this._textInputRef && this._textInputRef.focus();

  blurInput = () => this._textInputRef && this._textInputRef.blur();

  render() {
    const {
      pictureUrl,
      name="...",
      replying,
      targetName,
      cancelReply
    } = this.props;
    const {
      isSubmitting,
      message
    } = this.state;

    return (
      <React.Fragment>
        {
          Boolean(replying) && (
            <View style={styles.alert}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.alertTitle}
              >Replying <Text style={styles.targetName}>{targetName}</Text>
            </Text>
              <Text onPress={cancelReply} style={styles.cancelText}>Cancel</Text>
            </View>
          )
        }
        <View style={styles.container}>
          <View style={styles.left}>
            <UserAvatar
              rounded
              size={AVATAR_SIZE}
              src={pictureUrl}
              name={name}
              component={CachedImage}
            />
          </View>
          <View style={styles.body}>
            <TextInput
              ref={textInputRef => this._textInputRef = textInputRef}
              placeholder="Add a comment..."
              value={message}
              onChangeText={this._onChangeText}
              onBlur={() => this._onChangeText(message)}
            />
          </View>
          <View style={styles.right}>
            <IconButton
              icon="send"
              disabled={isSubmitting || message}
              onPress={this._onSubmit}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}