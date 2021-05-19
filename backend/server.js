const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const mongoose = require('mongoose');
require("dotenv").config();

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI ;
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true});
const connection = mongoose.connection;
connection.once("open", ()=>{
  console.log("Database very well connected !!! ")
})

const CourseRouter = require('./route/course')
const UserRouter = require('./route/users')
const AdminRouter = require('./route/admin')
const CommentRouter = require('./route/comment')

app.use('/course', CourseRouter)
app.use('/user', UserRouter)
app.use('/admin', AdminRouter)
app.use('/comment', CommentRouter)

app.listen(port, ()=> console.log("server is running"))