
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const studentRouter = require('../Routers/studentsRouter')
// const Cookieparser = require('cookie-parser')
const app = express();
// app.use(Cookieparser())
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://gangadharprathap0606_db_user:1k9uut221pa@cluster0.hfbawmq.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.listen(2885, () => {
    console.log("server running at port 2885")
});