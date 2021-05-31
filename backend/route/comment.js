const router = require ("express").Router();
let Comment = require('../models/comment.model')
let Course = require('../models/course.model')
let User = require('../models/user.model');

const EmailToName= async ( email)=>{
    var name=''
    await User.findOne({email: email})
        .then(elem =>{
        //console.log('name :  '+elem.name)
        name = elem.name
    })
    return name;
} 

router.route('/add').post((req, res)=>{
    Comment.findOne({idCourse : req.body.id,EmailUser : req.body.email}).then(com=>{
        if (com.stars == -1){
            com.stars = req.body.stars
        }
        
        const NewComment = {
            content : req.body.content,
            date : req.body.date
        }
        com.comment.push(NewComment)
        com.save();

        Course.findById(req.body.id).then(course=>{
            course.stars = course.stars+req.body.stars;
            course.save();
        })
        
        res.json('yes')

    })
    
})
router.route('/get').post((req, res)=>{
    Comment.find({idCourse : req.body.id}).then(async com=>{
        await com.forEach(async element => {
             await EmailToName(element.EmailUser ).then(values => {
                 element.name = values;
                console.log('adding')
            })
            console.log('a single comment :')
            console.log(element)
        });
        console.log('sending')
        res.json(com)

    })
})
module.exports = router;