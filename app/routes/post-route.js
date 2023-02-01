import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
});

router.post('/', (req, res) => {
    console.log(req.body);
});

export default router;