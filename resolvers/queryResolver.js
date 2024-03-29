module.exports = {
  sessions: (parent, args, context, info) => {
    return context.dataSources.sessionApi.getSessions(args);
  },
  /*
    - parent: Return value of the resolver for this field's parent
    - args: Object with all the args sent to the query
    - context: Shared across all resolvers that execute a particular operation. Use this to share per-operation state, such as authentication information and access to data sources.
    - config: contains information about the execution state of the operation
  */
  sessionById: (parent, args, context, info) => {
    // Handling errors
    try {
      // Return Session object
      return context.dataSources.sessionApi.getSessionById(args.id);
    } catch (error) {
      // Return Error object
      // Problem with this approach is that errors are being swallowed
      return { code: 'ERROR', message: 'An error occurred', token: '123456' };
    }
  },
  speakers: (parent, args, context, info) => {
    return context.dataSources.speakerApi.getSpeakers();
  },
  speakersById: (parent, args, context, info) => {
    return context.dataSources.speakerApi.getSpeakerById(args.id);
  },
};
