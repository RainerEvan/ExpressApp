import { ApolloServer } from 'apollo-server-express';

import typeDefs from '../graphql/schema/schema.js';
import resolvers from '../graphql/resolver/resolver.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
});

export default server;