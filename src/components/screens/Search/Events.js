import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';
import List from 'components/lists/EventSearch';
import { listAllEvents, searchEvent } from 'mygraphql/queries';

const PAGE_SIZE = 20;

@inject('stores')
@observer
export default class Events extends React.Component {

  render() {
    const { stores } = this.props;

    const { query, isConnected, location } = stores.appState;

    return (
      <ListHoc
        query={query}
        isConnected={isConnected}
        location={location.lat ? location : null}
        search
      />
    );
  }
}

const ListHoc = compose(
  graphql(gql(listAllEvents), {
    alias: 'withSearchEventsOffline',
    skip: props => props.isConnected,
    options: {
      fetchPolicy: 'cache-only'
    },
    props: ({ data, ownProps }) => ({
      loading: data.loading,
      events: data && data.listAllEvents && data.listAllEvents.items.filter(
        item => item.title.toLowerCase().includes(ownProps.query.toLowerCase()) ||
          item.eventType.toLowerCase().includes(ownProps.query.toLowerCase())
      ),
      ...ownProps
    })
  }),
  graphql(gql(searchEvent), {
    alias: 'withSearchEventsOnline',
    skip: props => !props.isConnected || !props.query,
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        filter: {
          query: props.query,
          location: props.location,
          distance: '150km'
        },
        size: PAGE_SIZE
      }
    }),
    props: ({ data, ownProps }) => ({
      loading: data.loading,
      events: data && data.searchEvent && data.searchEvent.items,
      ...ownProps
    })
  })
)(List);