const router = require ("express").Router();
let User = require('../models/user.model');
let Course = require('../models/course.model')
let Comment = require('../models/comment.model')

router.route('/').post((req, res)=>{
    User.find({email : req.body.email})
        .then(x=> 
            {
                if (x.length == 0){
                    const newUser = new User({
                    
                        email : req.body.email,
                        name : req.body.name,
                        isAdmin : false,
                        
                      })
                      newUser.save().then(()=>res.json("yes"))
                }
                else{
                    res.json("no")
                }                
            })
})
router.route('/fillProfile').post((req, res) =>{
    User.find({email : req.body.email})
          .then(elem => 
            {
              elem[0].name=req.body.name
              elem[0].organisation=req.body.organisation
              elem[0].intrests=req.body.intrests
              elem[0].post=req.body.post
              elem[0].image=req.body.image
              elem[0].save()
            })
    res.json("content added")
})
router.route('/getProfile').post((req, res) =>{
  User.findOne({email : req.body.email})
        .then(elem => 
          {
            res.json(elem)
          })
})
router.route('/updateProfile').post((req, res) =>{
  User.find({email : req.body.email})
        .then(elem => 
          {
            elem[0].name=req.body.profile.name
            elem[0].organisation=req.body.profile.organisation
            elem[0].intrests=req.body.profile.intrests
            elem[0].post=req.body.profile.post
            elem[0].save()
          })
  res.json("content added")
})
router.route('/addPublished').post((req, res) =>{
  User.findOne({email: req.body.email})
        .then(elem => 
          {
            elem.published.push(req.body.id)
            elem.save()
          })
  res.json("yes")
})
router.route('/addEnrolled').post((req, res) =>{
  User.findOne({email: req.body.email})
        .then(user => 
          {
            user.enrolled.push({id : req.body.id, progress :-1})
            user.save()
            Course.findById(req.body.id).then(course =>{
              course.student=course.student+1
              course.save()
              const NewComment = new Comment({
                EmailUser: user.email,
                idCourse: course._id,
                stars: -1,
                comment: []
              })
              NewComment.save().then(()=>{res.json("yes")})
            })
          })
})

 
router.route('/makeProgress').post((req,res)=>{
  User.findOne({email: req.body.email}).then(user=>{
    for(let enroll of user.enrolled){
      if(enroll.id == req.body.idCourse){
        if(req.body.indice> enroll.progress){
          enroll.progress = req.body.indice;
        }
        
        break;
      }
    }
    console.log(user.enrolled)
    /*user.enrolled.forEach(element => {
      if(element.id == req.body.idCourse){
        console.log("j'ai trouv?? le cours --> "+element.id)
        element.progress = element.progress+1;
        
        console.log(user.enrolled)
      }
      
    });*/
    user.markModified('enrolled')
    user.save().then(use=>{
      res.json("ok")
      console.log("finiiiiiiiiito")
    });
      

  })
})

router.route('/getUserName').post((req,res)=>{
  User.findOne({email: req.body.email})
    .then(elem =>
      res.json(elem.name)
    )
})

router.route('/verifyEnrolled').post((req,res)=>{
  var email = req.body.email;
  var id = req.body.id;
  var result =""
  User.findOne({email : email})
  .then(user=>{
    var founded = user.enrolled.filter(elem=>{
      return(elem.id == id)
    })
    //console.log("progress = "+ founded[0].progress)
    if(founded.length ==0) result={enrolled:"no", progress:-1}
    if(founded.length ==1) result={enrolled:"yes", progress:founded[0].progress}
    console.log(result)
    res.json(result)
    
  }
)
})

module.exports = router;