import express from 'express';

import * as postController from '../controller/post-controller.js';

const router = express.Router();

router.get('/', postController.getAllPosts);

router.get('/:id', postController.getPostById);

router.post('/', postController.addPost);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

export default router;