module.exports = {
  // Resolver for Session schema
  // Resolves field 'speakers' on schema
  async speakers(session, args, context) {
    const speakers = await context.dataSources.speakerApi.getSpeakers();

    // Get speakers on a session
    const returns = speakers.filter((speaker) => {
      return session.speakers.some(
        (innerSpeaker) => innerSpeaker.id === speaker.id
      );
    });

    return returns;
  },
};
