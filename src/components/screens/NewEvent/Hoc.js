// import { graphql, compose } from 'react-apollo';
// import gql from 'graphql-tag';
import Screen from './Screen';

export default Screen;
// import { createEvent } from 'mygraphql/mutations';
// import { listAllEvents, listAllSchedules, getEvent } from 'mygraphql/queries';
// import { createEventResponse } from 'helpers/optimisticResponse';

// const alias =  'withNewEventContainer';

// export default compose(
//   graphql(gql(getEvent), {
//     alias,
//     options: props => {
//       const id = props.navigation.getParam('id');
//       return ({
//         variables: {
//           id
//         },
//         fetchPolicy: 'cache-only'
//       });
//     },
//     props: ({ data, ownProps }) => ({
//       event: data && data.getEvent,
//       isNew: ownProps.navigation.getParam('isNew'),
//       ...ownProps
//     }),
//     skip: props => {
//       const id = props.navigation.getParam('id');
//       return !id;
//     }
//   }),
//   graphql(gql(createEvent), {
//     alias,
//     props: ({ mutate, ownProps }) => ({
//       onSubmit: (input) => mutate({
//         variables: {
//           input
//         },
//         optimisticResponse: () => createEventResponse(input),
//         update: (cache, { data: { createEvent } }) => {
//           if (createEvent) {
//             const query = gql(listAllEvents);
//             const data = cache.readQuery({ query });
//             data.listAllEvents.items = [
//               ...data.listAllEvents.items.filter(item => item.id !== createEvent.id),
//               createEvent
//             ];
//             cache.writeQuery({ query, data });
//           }
//         }
//       }),
//       ...ownProps
//     })
//   }),
//   graphql(gql(listAllSchedules), {
//     alias,
//     options: {
//       fetchPolicy: 'cache-only',
//     },
//     props: ({ data, ownProps }) => {
//       const id = ownProps.navigation.getParam('scheduleId');
//       return ({
//         schedules: data && data.listAllSchedules && data.listAllSchedules.items,
//         scheduleId: id,
//         ...ownProps
//       });
//     }
//   })
// )(Screen);