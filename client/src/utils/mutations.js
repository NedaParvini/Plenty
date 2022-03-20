import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// CHECK RECIPE MODEL
export const SAVE_RECIPE = gql`
  mutation saveRecipe($id: ID!) {
    saveRecipe(recipeId: $id) {
      _id
      username
      recipe {
        _id
        name
      }
    }
  }
`;

// CHECK RECIPE MODEL
export const REMOVE_RECIPE = gql`
  mutation removeRecipe($id: ID!) {
    removeRecipe(id: $id) {
      _id
      username
      recipe {
        _id
        name
      }
    }
  }
`;
