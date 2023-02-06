import { gql } from 'apollo-server-express';

const postTypeDef = gql`
    type Post {
        id: ID!
        title: String
        description: String
        date: Date
    }

    type Query {
        getAllPosts:[Post]
        getPostById(id:ID!):Post
    }
`;

export default postTypeDef;