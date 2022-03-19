const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    # savedRecipes: [Recipe]
  }

  type Query {
    me: User
    user: User
  }

  # type Recipe {
  #   _id: ID
  #   # // add more here- depends on API
  # }

  # type SavedRecipes {
  #   recipeId: String
  #   # // add more here- depends on API
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # saveRecipe(input: SavedRecipes!): User
    # removeRecipe(recipeId: String!): User
  }
`;

module.exports = typeDefs;
