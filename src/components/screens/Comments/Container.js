import React from 'react';
import uuidv5 from 'uuid/v5';
import shortid from 'shortid';
import Screen from './Screen';
import Suspense from 'components/common/Suspense';

export default class Container extends React.Component {
  state = {
    display: false
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({
      display: true
    }), 0);
  };

  _onSubmit = async (message, attachment) => {
    const hash = uuidv5(this.props.stores.appState.userId, uuidv5.DNS);
    const sort = shortid.generate();
    const id = `${hash}-${sort}`;
    const input = {
      id,
      content: message,
      commentEventId: this.props.commentEventId,
      commentScheduleId: this.props.commentScheduleId,
    };
    if (attachment) {
      input.attachment = attachment;
    }
    
    this.props.onSubmit && this.props.onSubmit(input);
  };
  _goBack = () => this.props.navigation.goBack();
  _navigateToViewEmbed = ({ subtitle, uri, s3Object }) => this.props.navigation.navigate('ViewEmbed', {
    subtitle,
    uri,
    s3Object
  });
  _navigateToProfile = (id) => this.props.navigation.navigate('UserProfile', { id });

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      this.state.display !== nextState.display ||
      this.props.comments.length !== nextProps.comments.length ||
      this.props.loading !== nextProps.loading
    );
  };

  render() {
    const {
      display
    } = this.state;
    
    if (!display) return <Suspense />;
    
    const {
      loading,
      onRefresh,
      error,
      fetchMore,
      nextToken,
      comments,
      commentsCount,
      isOwner,
      commentEventId,
      notFound
    } = this.props;

    return (
      <Screen
        notFound={notFound}
        id={commentEventId}
        isOwner={isOwner}
        loading={loading}
        title={this.props.navigation.getParam('title')}
        error={Boolean(error)}
        commentsCount={commentsCount}
        comments={comments.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))}
        goBack={this._goBack}
        onSubmit={this._onSubmit}
        onRefresh={onRefresh}
        navigateToProfile={this._navigateToProfile}
        navigateToViewEmbed={this._navigateToViewEmbed}
        fetchMoreComments={fetchMore}
        nextToken={nextToken}
      />
    );
  }
}
