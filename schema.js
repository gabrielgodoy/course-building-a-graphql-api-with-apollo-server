const { gql } = require('apollo-server');

module.exports = gql`
  # Schema for the Query
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakersById(id: ID): Speaker
  }

  type Speaker {
    id: ID
    bio: String
    name: String
    sessions: String
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      # GraphQL directive
      @deprecated(
        reason: "We will be migrating to a tags based system in the future..."
      )
    level: String
    speakers: [Speaker]
  }
`;
