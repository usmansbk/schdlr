// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
import Info from './Info';
export default Info;
// import { getSchedule } from 'api/queries';

// const alias = 'withScheduleInfoContainer';

// export default graphql(gql(getSchedule), {
//   alias,
//   options: props => ({
//     variables: {
//       id: props.id,
//     },
//     notifyOnNetworkStatusChange: true,
//     fetchPolicy: 'cache-first',
//   }),
//   props: ({ data, ownProps }) => ({
//     loading: data.loading || data.networkStatus === 4,
//     error: data.error,
//     onRefresh: async () => {
//       await data.refetch();
//     },
//     schedule: data && data.getSchedule,
//     ...ownProps,
//   })
// })(Info)