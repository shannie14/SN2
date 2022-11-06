const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }

  // type Episode {
  //   _id: ID
  //   series: String
  //   titles: String
  //   clip: String
  //   wtw: String
  //   o: string
  //   license: String
  //   recipes: String
  //   description: String
  //   length: String
  //   cp1: String
  //   p1: String
  //   p1id: String
  //   cp2: String
  //   p2: String
  //   p2id: String
  //   cp3: String
  //   p3: String
  //   p3id: String
  //   cp4: String
  //   p4: String
  //   p4id: String
  //   cp5: String
  //   p5: String
  //   p5id: String
  //   category: String
  //   talent: String
  //   audio: String
  // }
 
  type Query {
    episodes: [Episode]
  }
  `;

module.exports = typeDefs;

