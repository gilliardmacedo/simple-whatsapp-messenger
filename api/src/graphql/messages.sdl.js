export const schema = gql`
  type Message {
    id: Int!
    message: String!
    destination: String!
    createdAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
  }

  input CreateMessageInput {
    message: String!
    destination: String!
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
  }
`
