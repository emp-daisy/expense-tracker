import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Expenses queries',
  fields: {
    welcome: {
      type: GraphQLString,
      description: 'Welcome bot for the API',
      resolve: () => 'Hello and Welcome to our Expenses Tracker API'
    },
  }
});
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Expenses mutations',
  fields: {

  }
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType
});

export default schema;