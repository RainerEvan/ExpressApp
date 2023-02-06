import { gql } from 'apollo-server-express';

import postTypeDef from './post-schema.js';

const scalarTypeDef = gql`
    scalar Date
`;

const typeDefs = [
    scalarTypeDef,
    postTypeDef
];

export default typeDefs;