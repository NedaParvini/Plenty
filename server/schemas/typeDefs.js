const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    recipes: [Recipe]
  }

  type meals {
    idIngredient: ID
    strIngredient: String
    strDescription: String
    strType: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    recipes(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeText: String!): Recipe
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
