import AWSAppSyncClient, { createAppSyncLink } from 'aws-appsync';
import { Auth, Analytics } from 'aws-amplify';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import SimpleToast from 'react-native-simple-toast';
import aws_config from '../aws-exports';
import logger from './logger';
import stores from 'stores';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(error => {
      logger.log(error);
      SimpleToast.show('Server error: ' + error.message, SimpleToast.LONG);
      Analytics.record({
        name: 'GraphQLError',
        attributes: {
          errorName: error.name,
          errorMessage: error.message,
          errorLocation: error.locations,
          errorPath: error.path,
        }
      });
    });  
  }
  if (networkError) SimpleToast.show('No connection', SimpleToast.SHORT);
});

const appSyncLink = createAppSyncLink({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: aws_config.aws_appsync_authenticationType,
    credentials: () => Auth.currentCredentials()
  },
  resultsFetcherLink: ApolloLink.from([
    setContext((_, previousContext) => {
      const username = stores.me.email;
      return ({
        headers: {
          ...previousContext.headers,
          username
        }
      })
    }),
    createHttpLink({
      uri: aws_config.aws_appsync_graphqlEndpoint
    })
  ])
});

const link = ApolloLink.from([errorLink, appSyncLink]);

const client = new AWSAppSyncClient({
  offlineConfig: {
    callback: (error) => {
      if (error) {
        const { mutation } = error;
        SimpleToast.show(`Error for ${mutation}`, SimpleToast.LONG);
        logger.log(error);
      }
    }
  },
  cacheOptions: {
    cacheRedirects: {
      Query: {
        getBoard: (_, args, { getCacheKey }) => (
          getCacheKey({ __typename: 'Board', id: args.id })),
        getEvent: (_, args, { getCacheKey }) => (
          getCacheKey({ __typename: 'Event', id: args.id })),
        getUser: (_, args, { getCacheKey }) => (
          getCacheKey({ __typename: 'User', id: args.id })),
        getComment: (_, args, { getCacheKey }) => (
          getCacheKey({ __typename: 'Comment', id: args.id })
        )
      },
    }
  },
}, { link });

export default client;