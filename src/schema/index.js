const { gql } = require('apollo-server-express');
const { mergeResolvers } = require('merge-graphql-schemas');

const { scalarsTypeDefs, scalarsResolvers } = require('../common/scalars');
const { todosTypeDefs, todosResolvers } = require('../modules/todos');

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
const typeDefs = [rootTypeDefs, scalarsTypeDefs, todosTypeDefs];

const resolvers = mergeResolvers([scalarsResolvers, todosResolvers]);

module.exports = {
  typeDefs,
  resolvers
};
