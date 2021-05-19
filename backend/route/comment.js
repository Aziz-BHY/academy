const router = require ("express").Router();
let Comment = require('../models/comment.model')

router.route('/add').post((req, res)=>{
    

    Comment.findOne({idCourse : req.body.id}).then(com=>{
        com.stars = req.body.stars
        const NewComment = {
            content : req.body.content,
            date : req.body.date
        }
        com.comment.push(NewComment)
        com.save()
        res.json('yes')

    })
})
module.exports = router;