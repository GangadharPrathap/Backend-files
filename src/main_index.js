
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from '../Routers/studentsRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://gangadharprathap0606_db_user:1k9uut221pa@cluster0.hfbawmq.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(2885, () => {
    console.log("server running at port 2885")
});