import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { deleteFollow } from 'api/mutations';
import updateApolloCache from 'helpers/updateApolloCache';
import buildOptimisticResponse from 'helpers/optimisticResponse';
import { DELETE } from 'lib/constants';
import Schedule from './Schedule';

export default graphql(gql(deleteFollow), {
  alias: 'withDeleteFollow',
  withRef: true,
  props: ({ mutate, ownProps }) => ({
    ...ownProps,
    unfollow: (input, id) => mutate({
      variables: {
        input
      },
      update: (cache, { data: { deleteFollow } }) => deleteFollow && (
        updateApolloCache(cache, deleteFollow, DELETE)
      ),
      optimisticResponse: buildOptimisticResponse({
        input: {
          ...input,
          followScheduleId: id
        },
        mutationName: 'deleteFollow',
        operationType: DELETE,
        responseType: 'Follow'
      })
    })
  })
})(Schedule);