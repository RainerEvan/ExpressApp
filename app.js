import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import connectDb from './app/config/database-config.js';
import postRoute from './app/routes/post-route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDb();
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