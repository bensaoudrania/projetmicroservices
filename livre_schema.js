const { gql } = require('apollo-server-express');

const livreSchema = gql`
  type Livre {
    id: Int!
    titre: String!
    auteur: String!
    annee: Int!
  }

  type Query {
    livres: [Livre!]!
  }
`;

module.exports = livreSchema;