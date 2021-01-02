// A resolver is a function that's responsible for populating the data for a single field in your schema.

const Query = require('./queryResolver');
const Session = require('./sessionResolver');
const Mutation = require('./mutationResolver');

module.exports = {
  Query,
  Session,
  Mutation,
  SessionOrError: {
    // __resolveType requests different data depending on the type
    __resolveType(obj) {
      // If has code property it is an Error
      if (obj.code) {
        return 'Error';
      }
      return 'Session';
    },
  },
};
