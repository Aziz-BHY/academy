const router = require ("express").Router();
let Comment = require('../models/comment.model')

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
        com.save()
        res.json('yes')

    })
})
router.route('/get').post((req, res)=>{
    var NbComments = 0;
    Comment.find({idCourse : req.body.id}).then(com=>{
        //console.log(com)
        // calucler nb de commentaires .. à revoir plus tard
        com.forEach(element => {
            if (element.comment.length != 0) 
            NbComments=NbComments+element.comment.length
        });
        console.log(NbComments)
        res.json(com)

    })
})
module.exports = router;