const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const mongoose = require('mongoose');
require("dotenv").config();

app.use(cors());
app.use(express.json());


/*app.route("/").get((req, res)=>{
    var fs = require('fs');
    try {
        const data = fs.readFileSync('./AcademyFiles/hadhemi/uiux/course.md', 'utf8')
        console.log(data)
        res.json(data);

      } catch (err) {
        console.error(err)
      }
})
*/

const uri = process.env.ATLAS_URI ;
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true});
const connection = mongoose.connection;
connection.once("open", ()=>{
  console.log("Database very well connected !!! ")
})

const CourseRouter = require('./route/course')

app.use('/course', CourseRouter)

app.listen(port, ()=> console.log("server is running"))