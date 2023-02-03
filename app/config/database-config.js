import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connectDb() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export default connectDb;