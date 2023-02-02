import Post from '../model/post.js';

export const getAllPosts = async (req, res) => {
    Post.find()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            });
        });
}

export const getPostById = async (req, res) => {
    Post.findById(req.params.id)
        .then(data => {
            if(!data){
                res.status(400).send({
                    message: "Post with current id cannot be found"
                });
            }
            else{
                res.send(data);
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            });
        });
}

export const addPost = async (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Body cannot be empty"
        });
    }

    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    post.save(post)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            });
        });
}

export const updatePost = async (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Body cannot be empty"
        });
    }

    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(400).send({
                    message: "Post with current id cannot be found"
                });
            }
            else{
                res.send({
                    message: "Post has been updated successfully!"
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            });
        });
}

export const deletePost = async (req, res) => {
    const id = req.params.id;

    Post.findByIdAndRemove(id)
        .then(data => {
            if(!data){
                res.status(400).send({
                    message: "Post with current id cannot be found"
                });
            }
            else{
                res.send({
                    message: "Post has been deleted successfully!"
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            });
        });
}