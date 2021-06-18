const mongoose = require ("mongoose");
const schema = mongoose.Schema ; 

const courseSchema = new schema ({
    email : {type : String , required : true},
    name : {type : String , required : true},
    intrests : {type : Array },
    organisation : {type : String },
    image : {type : String},
    post : {type : String},
    enrolled :{type : Array},
    published :{type : Array},
    isAdmin :{type : Boolean},
},
{
    timesstamps : true 
});

const user = mongoose.model('user', courseSchema);

module.exports = user; 
