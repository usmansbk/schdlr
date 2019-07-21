import { graphql, compose } from 'react-apollo';
import { withNavigationFocus } from 'react-navigation';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';
import Boards from './Boards';
import { boardsDiff } from 'lib/utils';
import { listAllBoards, listAllEvents } from 'mygraphql/queries';
import { listAllBoardsDelta } from 'mygraphql/deltasync';
import client from 'config/client';

const alias = 'withBoardsContainer';

export default inject("stores")(observer(
  compose(
    withNavigationFocus,
    graphql(gql(listAllBoards),
    {
      alias,
      options: (props) => {
        const skipBaseQuery = props.stores.boardsSync.skipBaseQuery;
        const isConnected = props.stores.appState.isConnected;

        return {
          fetchPolicy: (!skipBaseQuery && isConnected) ? 'cache-and-network' : 'cache-first',
          notifyOnNetworkStatusChange: true,
          onCompleted: () => {
            !skipBaseQuery && props.stores.boardsSync.updateBaseLastSyncTimestamp();
          },
        };
      },
      props: ({ data, ownProps}) => ({
        loading: data.loading || data.networkStatus === 4,
        boards: data && data.listAllBoards && data.listAllBoards.items || [],
        error: data.error && !data.listAllBoards,
        onRefresh: () => data.refetch(),
        fetchMore: () => data.fetchMore({
          query: gql(listAllBoardsDelta),
          variables: {
            lastSync: ownProps.stores.boardsSync.lastSync
          },
          updateQuery: (prev, { fetchMoreResult: { listAllBoardsDelta }}) => {
            if (!(listAllBoardsDelta && listAllBoardsDelta.items.length)) return prev;
            const { items } = listAllBoardsDelta;

            const { listAllBoards } = prev;
            ownProps.stores.logs.addToQueue(items, 'board', listAllBoards.items);

            const deleteIds = items.filter(item => item.aws_ds === 'DELETE').map(item => item.id);
            if (deleteIds.length) {
              const query = gql(listAllEvents);
              const data = client.readQuery({ query });
              data.listAllEvents.item = data.listAllEvents.items.filter(item => !deleteIds.includes(item.boardId));
              client.writeQuery({ query, data });
            }
            
            const filter_deleted_items = listAllBoards.items.filter(item => !deleteIds.includes(item.id));

            const remove_aws_ds_field = items.map(item => {
              const newItem = Object.assign({}, item);
              delete newItem.aws_ds;
              delete newItem.timestamp;
              return newItem;
            }).filter(item => !deleteIds.includes(item.id));

            const new_items = boardsDiff(remove_aws_ds_field, filter_deleted_items);

            const new_items_ids = new_items.map(item => item.id);

            const filter_changed_items = filter_deleted_items.filter(item => !new_items_ids.includes(item.id))

            const add_new_items_to_prev = [...filter_changed_items, ...new_items];

            ownProps.stores.boardsSync.updateLastSyncTimestamp();
            return Object.assign({}, prev, {
              listAllBoards: Object.assign({}, listAllBoards, {
                items: add_new_items_to_prev
              })
            });
          }
        }),
        ...ownProps
      })
    })
  )(Boards)
));