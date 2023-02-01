import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoute from './app/routes/post-route.js';

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postRoute);

mongoose.connect(
    'mongodb://localhost:27017/expressapp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("Connected to DB")
);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});