import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import List from '../../lists/BoardSearch';
import { listAllBoards } from '../../../graphql/queries';

export default class Boards extends React.Component {

  shouldComponentUpdate = (nextProps) => {
    return nextProps.screenProps.query !== this.props.screenProps.query
  }
  
  render() {
    const {
      screenProps: { query },
    } = this.props;
    return (
      <List
        query={query}
      />
    );
  }
}

// const ListHoc = compose(
//   graphql(gql(listAllBoards), {
//     alias: 'withSearchBoardsOffline',
//     skip: props => props.isConnected,
//     options: {
//       fetchPolicy: 'cache-only'
//     },
//     props: ({ data, ownProps }) => ({
//       loading: data.loading,
//       boards: data && data.listAllBoards && data.listAllBoards.items.filter(
//         item => item.name.toLowerCase().includes(ownProps.query.toLowerCase())
//       ),
//       ...ownProps
//     })
//   })
// )(List);