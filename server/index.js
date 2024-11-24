import express from 'express';
import connectDB from './config/dbConnection.js';
import "dotenv/config";

const app = express();

const startServer = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
}

startServer();