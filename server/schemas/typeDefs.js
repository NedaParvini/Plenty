const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    # savedRecipes: [Recipe]
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

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # saveRecipe(input: SavedRecipes!): User
    # removeRecipe(recipeId: String!): User
  }
=======
type User {
  _id: ID
  username: String
  email: String
  recipeCount: Int
  savedRecipes: [Recipe]
}
type Query {
  idIngredient: id!
}
type Recipe {
  _id: ID
  # // add more here- depends on API
}
type SavedRecipes {
  recipeId: String
  # // add more here- depends on API
}
type Auth {
  token: ID!
  user: User
}
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveRecipe(input: SavedRecipes!): User
  removeRecipe(recipeId: String!): User
}
>>>>>>> 0a51bbdc... commit before a pull
`;

module.exports = typeDefs;
