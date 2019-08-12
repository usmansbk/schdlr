import { graphql, compose } from 'react-apollo';
import { withNavigationFocus } from 'react-navigation';
import gql from 'graphql-tag';
import Screen from './Schedule';
import { getSchedule } from 'api/queries';

const alias = 'withScheduleEventsContainer';

export default compose(
  withNavigationFocus,
  graphql(gql(getSchedule), {
    alias,
    options: props => ({
      variables: {
        id: props.id,
      },
      fetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    }),
    props: ({ data, ownProps }) => ({
      error: data.error,
      loading: data.loading || (data.networkStatus === 4),
      schedule: data && data.getSchedule,
      ...ownProps,
    })
  }),
//   graphql(gql(listScheduleEvents), {
//     alias,
//     skip: props => props.cacheFirst,
//     options: props => ({
//       fetchPolicy: 'cache-and-network',
//       notifyOnNetworkStatusChange: true,
//       variables: {
//         id: props.id,
//         filter: filterEvents
//       },
//     }),
//     props: ({ data, ownProps}) => ({
//       loadingEvents: data.loading || data.networkStatus === 4,
//       loadingEventsError: data.error,
//       events: (
//         data && data.listScheduleEvents &&
//         data.listScheduleEvents.events &&
//         data.listScheduleEvents.events.items || []
//       ),
//       ...ownProps
//     }) 
//   })
)(Screen);