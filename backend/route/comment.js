const router = require ("express").Router();
let Comment = require('../models/comment.model')

router.route('/add').post((req, res)=>{
    Comment.findOne({idCourse : req.body.id,EmailUser : req.body.email}).then(com=>{
        if (com.start == -1){
            com.stars = req.body.stars
        }
        
        const NewComment = {
            content : req.body.content,
            date : req.body.date
        }
        com.comment.push(NewComment)
        com.save()
        res.json('yes')

    })
})
router.route('/get').post((req, res)=>{
    Comment.find({idCourse : req.body.id}).then(com=>{
        console.log(com)
        res.json(com)

    })
})
module.exports = router;