const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type meals {
    strIngredient: String
  }
  
 
`;

module.exports = typeDefs;
