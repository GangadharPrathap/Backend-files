
import express from 'express';
import studentsRouter from '../Routers/studentsRouter.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // to parse JSON bodies
app.use(cors()); // to enable CORS

app.use('/', studentsRouter);
app.get('/users', (req, res) => {
    res.send('Welcome to the Backend Server');
});
app.listen(7000, () => {
    console.log(`server is running on port ${7000}`);
});