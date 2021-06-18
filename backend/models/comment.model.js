const mongoose = require ("mongoose");
const schema = mongoose.Schema ; 

const commentSchema = new schema ({
    EmailUser: {type: String, required: true},
    idCourse: {type: String, required: true},
    stars: {type: Number, required: true},
    comment: {type: Array, required: true}
},
{
    timesstamps : true 
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment; 
