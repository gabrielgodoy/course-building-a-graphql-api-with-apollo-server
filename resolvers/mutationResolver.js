module.exports = {
  toggleFavoriteSession: (parent, args, context, info) => {
    return context.dataSources.sessionApi.toggleFavoriteSession(args.id);
  },
  addNewSession: (parent, args, context, info) => {
    return context.dataSources.sessionApi.addSession(args.session);
  },
};
