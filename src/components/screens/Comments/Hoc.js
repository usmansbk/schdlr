import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';
import { getUser, getEventComments } from 'api/queries';
import { createComment } from 'api/mutations';
import Screen from './Screen';
// import { createCommentResponse } from 'helpers/optimisticResponse';
// import { COMMENTS_LIMIT } from 'lib/constants';

// const LIMIT = COMMENTS_LIMIT;

export default inject("stores")(observer(
  compose(
    graphql(gql(getUser), {
      alias: 'withCommentsUserScreen',
      options: props => ({
        fetchPolicy: 'cache-only',
        variables: {
          id: props.stores.appState.userId
        }
      }),
      props: ({ data, ownProps }) => ({
        user: data && data.getUser,
        commentEventId: ownProps.navigation.getParam('id'),
        ...ownProps
      })
    }),
    graphql(gql(createComment), {
      alias: 'withCreateCommentScreen',
      props: ({ mutate, ownProps }) => ({
        onSubmit: (input) => mutate({
          variables: {
            input
          }
        }),
        ...ownProps
      })
    }),
    graphql(gql(getEventComments), {
      alias: 'withGetEventCommentsScreen',
      options: props => ({
        fetchPolicy: 'cache-and-network',
        notifyOnNetworkStatusChange: true,
        variables: {
          id: props.navigation.getParam('id')
        }
      }),
      props: ({ data, ownProps }) => ({
        loading: data.loading || data.networkStatus === 4,
        error: data.error,
        data: data && data.getEventComments,
        ...ownProps
      })
    })
  )(Screen)
));