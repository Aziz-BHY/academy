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
  module.exports = router;