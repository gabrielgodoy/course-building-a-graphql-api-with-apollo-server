const { ApolloServer, ApolloError } = require('apollo-server');
const SessionApi = require('./datasources/sessionData');
const SpeakerApi = require('./datasources/speakerData');
const typeDefs = require('./typeDefs/schema.js');
const resolvers = require('./resolvers/index.js');

const dataSources = () => ({
  sessionApi: new SessionApi(),
  speakerApi: new SpeakerApi(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: false, // Hide stacktrace error for end-user
  formatError: (error) => {
    // formatError cleans up error message for end-user
    // But this error is too general, specific errors can be treated on resolvers
    if (error.extensions.code === 'INTERNAL_SERVER_ERROR') {
      return new ApolloError('We are having some trouble', 'ERROR', {
        /*
          It is nice to generate a token for when user opens a complain ticket,
          we can find this specific error on the logs
        */
        token: 'uniquetoken_to_log',
      });
    }

    // Return errors that are not INTERNAL_SERVER_ERROR
    return error;
  },
  // introspection: false, // Disable Apollo playground
  // playground: false // Disable Apollo playground
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`graphQL running at ${url}`));
