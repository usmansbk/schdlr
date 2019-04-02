import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withNavigation } from 'react-navigation';
import Dialog from './Dialog';
import SimpleToast from 'react-native-simple-toast';
import { listAllBoards } from 'mygraphql/queries';
import { deleteBoard } from 'mygraphql/mutations';

export default compose(
  withNavigation,
  graphql(gql(deleteBoard), {
    alias: 'withDeleteBoardDialog',
    options: {
      onCompleted: () => {
        SimpleToast.show('Board deleted', SimpleToast.SHORT);
      }
    },
    props: ({ mutate, ownProps }) => ({
      onSubmit: async (input) => await mutate({
        variables: {
          input
        },
        optimisticResponse: () => ({
          __typename: 'Mutation',
          deleteBoard: {
            __typename: 'Board',
            id: input.id
          }
        }),
        update: (cache, { data: { deleteBoard } }) => {
          if (deleteBoard) {
            const query = gql(listAllBoards);
            const data = cache.readQuery({ query });
            data.listAllBoards.items = data.listAllBoards.items.filter(item => item.id !== deleteBoard.id);
            cache.writeQuery({ query, data });
          }
        }
      }),
      ...ownProps
    })
  })
)(Dialog);