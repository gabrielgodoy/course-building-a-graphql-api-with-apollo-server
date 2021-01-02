const { ApolloError } = require('apollo-server');

module.exports = {
  // Resolver for Session schema
  // Resolves field 'speakers' on schema
  async speakers(session, args, context) {
    // Resolving potential errors on REST API with try/catch
    try {
      const speakers = await context.dataSources.speakerApi.getSpeakers();

      // Get speakers on a session
      const speakersOnSession = speakers.filter((speaker) => {
        return session.speakers.some(
          (innerSpeaker) => innerSpeaker.id === speaker.id
        );
      });
      return speakersOnSession;
    } catch (error) {
      return new ApolloError(
        'Unable to retrieve speakers',
        'SPEAKER_API_ERROR',
        {
          token: 'uniquetoken_to_log',
        }
      );
    }
  },
};
