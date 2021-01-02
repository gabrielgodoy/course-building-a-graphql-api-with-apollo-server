const sessions = require('../data/sessions.json');

// On GraphQL, sometimes you will be fetching not only data from database but from some other API as well

/*
Data sources are classes that encapsulate fetching data from a particular service, with built-in support for caching, deduplication, and error handling. You write the code that is specific to interacting with your backend, and Apollo Server takes care of the rest.
*/
const { DataSource } = require('apollo-datasource');

class SessionApi extends DataSource {
  constructor() {
    // In order to use this keyword on constructor, super() must be called
    super();
  }

  // config contains caching, context, etc
  initialize(config) {}

  getSessions(args) {
    // Sessions must match all args/fields passed as argument
    return sessions.filter((session) =>
      Object.keys(args).every((key) => args[key] === session[key])
    );
  }

  getSessionById(id) {
    return sessions.filter((session) => session.id === parseInt(id))[0];
  }

  toggleFavoriteSession(id) {
    const session = sessions.filter(
      (session) => session.id === parseInt(id)
    )[0];
    session.favorite = !session.favorite;

    return session;
  }

  addSession(session) {
    session.id = 12;
    sessions.push(session);
    return session;
  }
}

module.exports = SessionApi;
