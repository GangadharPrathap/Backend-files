
import express from 'express';
import studentsRouter from '../Routers/studentsRouter.js';


const app = express();
app.use(express.json()); // to parse JSON bodies

app.use('/', studentsRouter);
app.listen(7000, () => {
    console.log(`server is running on port ${7000}`);
});