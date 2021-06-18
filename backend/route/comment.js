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
router.route('/get').post(async (req, res)=>{
    let comme =[];
    await Comment.find({idCourse : req.body.id}).then( async com=>{
        for(let commentaire of com){
            await User.findOne({email: commentaire.EmailUser})
            .then(elem =>{
            console.log('name :  '+elem.name)
            commentaire.EmailUser = elem.name
            console.log(commentaire)
            comme.push(commentaire)
        })
        
        }
        console.log('sending')
        console.log(comme)
        res.json(comme)
          /*com.forEach( element => {
              EmailToName(element.EmailUser ).then(values => {
                 element.name = values;
                console.log('adding')
                console.log('a single comment :')
            })
        });*/
        
    })
   
})
module.exports = router;