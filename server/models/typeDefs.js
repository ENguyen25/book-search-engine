const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(username: String!, email: String!, password: String!): Auth
    removeBook(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
