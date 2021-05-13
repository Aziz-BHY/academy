const mongoose = require ("mongoose");
const schema = mongoose.Schema ; 

const courseSchema = new schema ({
    title : {type : String , required : true},
    teacher : {type : Object , required : true},
    category : {type : String , required : true},
    language : {type : String , required : true},
    level : {type : String , required : true},
    description : {type : String , required : true},
    tags : {type : Array , required : true},
    path : { type : String },
    sections : {type : Array},
    price : {type : String},
    image : {type : String},
    status : {type : String},
    student :{type : Number},


},
{
    timesstamps : true 
});

const course = mongoose.model('course', courseSchema);

module.exports = course; 
