import express from 'express';
import connectDB from './config/dbConnection.js';
import "dotenv/config";
import routes from './routes/index.js';

const app = express();

app.use((req, res, next) => {
    console.log('Hit API')
    next();
})

app.use(routes);

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