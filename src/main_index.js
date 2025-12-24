import mongoose, { mongo } from 'mongoose';
import express from 'express';
import studentsRouter from '../Routers/studentsRouter.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // to parse JSON bodies
app.use(cors()); // to enable CORS

mongoose.connect("mongodb://localhost:27017/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentsRouter);
app.get('/users', (req, res) => {
    res.send('Welcome to the Backend Server');
});
app.listen(7000, () => {
    console.log(`server is running on port ${7000}`);
});