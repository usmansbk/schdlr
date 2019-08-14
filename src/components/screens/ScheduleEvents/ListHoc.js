import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getScheduleEvents } from 'api/queries';
import { sortBookmarks } from 'lib/utils';
import { getEvents } from 'lib/calendr';
import List from 'components/lists/ScheduleEvents';

const alias = 'withScheduleEventsContainer';

class ListHoc extends React.Component {

  _onRefresh = () => this.props.onRefresh();

  _fetchPastEvents = () => this.props.fetchPastEvents();

  render() {
    const {
      loading,
      error,
      events,
    } = this.props;

    return <List
            listType="schedule"
            events={events}
            loading={loading}
            error={error}
            onRefresh={this._onRefresh}
            fetchPastEvents={this._fetchPastEvents}
          /> 
  }
}

export default graphql(gql(getScheduleEvents), {
  alias,
  options: props => ({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      id: props.id
    },
  }),
  props: ({ data, ownProps}) => ({
    loading: data.loading || data.networkStatus === 4,
    error: data.error,
    onRefresh: () => data.refetch(),
    fetchPastEvents: () => null,
    events: data && data.getScheduleEvents && sortBookmarks(getEvents(data.getScheduleEvents.events.items)),
    ...ownProps
  }) 
})(ListHoc);