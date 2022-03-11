const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    recipes: [Recipe]
  }

  type Recipe {
    _id: ID
    recipeText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    recipe(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeText: String!): Thought
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
