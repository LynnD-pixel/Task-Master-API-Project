import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
    try {
        await moongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!')
    } catch(e) {
        console.log(e)
    }
}

connectDB()