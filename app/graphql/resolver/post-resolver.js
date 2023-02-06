import Post from '../../model/post.js';

const postResolver = {
    Query: {
        getAllPosts: async () => {
            return await Post.find();
        },
        getPostById: async (_, { id }) => {
            return await Post.findById(id);
        },
    },
};

export default postResolver;