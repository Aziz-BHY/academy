const router = require ("express").Router();
let Course = require('../models/course.model')
let User = require('../models/user.model');

router.route('/allCourses').post((req,res)=>{
    Course.find().then(course=>{
      res.json(course)
    })
  })
  router.route('/validateCourse').post((req,res)=>{
    Course.findById(req.body.id).then(course=>{
      course.status="active"
      course.save()
      res.json("ok")
    })
  })

  router.route('/isAdmin').post((req,res)=>{
    var email = req.body.email
    var result =false
  
    //console.log("le mail reçu --> "+ email);
    User.find({isAdmin : true, email: email}).then(admins=>{
      //console.log(admins)
      if(admins.length==1) result=true
      console.log('admin is -->'+result)
      res.json(result)
    })
    
  })
  
  module.exports = router;