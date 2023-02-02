import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoute from './app/routes/post-route.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/expressapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/post', postRoute);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});