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
    sessionById(id: ID): SessionOrError # Union: Return session or error
    speakers: [Speaker]
    speakersById(id: ID): Speaker
  }

  union SessionOrError = Session | Error

  type Error {
    code: String
    message: String
    token: String
  }

  # Example of Enum
  # enum Room {
  #   EUROPA
  #   SOL
  #   SATURN
  # }

  type Mutation {
    # Mutation below returns a newly created session object (Session)
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  type Speaker {
    id: ID
    bio: String
    name: String
    sessions: String
  }

  # Input types are special object types that allow you to pass objects as arguments to queries and mutations
  # This input is for creating
  input SessionInput {
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
    favorite: Boolean
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
    favorite: Boolean
    speakers: [Speaker]
  }
`;
