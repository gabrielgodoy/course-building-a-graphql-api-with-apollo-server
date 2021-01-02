const { ApolloServer } = require('apollo-server');
const SessionApi = require('./datasources/SessionApi');
const SpeakerApi = require('./datasources/SpeakerApi');
const typeDefs = require('./schema.js');

const resolvers = require('./resolvers/index.js');

const dataSources = () => ({
  sessionApi: new SessionApi(),
  speakerApi: new SpeakerApi(),
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // introspection: false, // Disable Apollo playground
  // playground: false // Disable Apollo playground
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`graphQL running at ${url}`));
