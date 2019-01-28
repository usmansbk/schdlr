import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Starred from './Starred';
import { listAllEvents } from '../../../graphql/queries';

export default graphql(gql(listAllEvents), {
  options: {
    fetchPolicy: 'cache-only',
  },
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    events: data && data.listAllEvents && data.listAllEvents.items || [],
    onRefresh: async () => {
      try {
        await data.refetch();
      } catch (e) {

      }
    }
  })
})(Starred);