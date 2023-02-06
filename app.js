import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './app/config/database-config.js';
import server from './app/config/graphql-config.js';

import postRoute from './app/route/post-route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

await server.start();
server.applyMiddleware({app});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/post', postRoute);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});