import { GraphQLScalarType, Kind } from 'graphql';

import postResolver from './post-resolver.js';

const scalarResolver = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Custom scalar type for dates',
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.toISOString();
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.STRING) {
                return new Date(ast.value);
            }
            return null;
        },
    }),
}

const resolvers = [
    scalarResolver,
    postResolver
];

export default resolvers;