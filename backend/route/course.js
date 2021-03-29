const router = require ("express").Router();

let Course = require('../models/course.model')

router.route('/add').post((req, res)=>{
  const newCourse = new Course({
    title : req.body.title,
    teacher : req.body.teacher,
    category : req.body.category,
    language : req.body.language,
    level : req.body.level,
    description : req.body.description,
    tags : req.body.tags,
    
    
  })
    newCourse.save().then(()=>res.json("yes"))
})

router.route('/addContent').post((req, res) =>{
  
  var fs = require('file-system');
  fs.writeFile(req.body.path , req.body.content, function(err) {"error error"})
  
  Course.find({title :req.body.title , teacher:req.body.teacher})
        .then(courses => 
          {
            courses[0].path=req.body.path
            courses[0].save()
          })
})

router.route('/courses').get((req, res) =>{
   let checkedList = JSON.parse(req.query.check);
   let checkedTrue =[];
    for (let i in checkedList){
      if (checkedList[i]==true )
      checkedTrue.push(i)
    }
    
   
    Course.find()
          .then (foundCourses => {
            if(checkedTrue.length != 0)
            foundCourses=foundCourses.filter((course)=> checkedTrue.includes(course.category))
          if(req.query.searchTerm){
            foundCourses=foundCourses.filter((course) => (course.title.includes(req.query.searchTerm)) 
            || (course.description.includes(req.query.searchTerm))
            || (course.tags.includes(req.query.searchTerm))
            || (course.teacher.includes(req.query.searchTerm)) ) 
          }
          res.json(foundCourses)
        })
})

router.route('/CourseDetail').get((req, res) =>
  {
    var fs = require('fs');
    Course.findById(req.query.id ).then(
    foundedCourse => {
      

      try {
        const data = fs.readFileSync(foundedCourse.path, 'utf8')
        
        res.json(
          {course : foundedCourse,
          fileData : data}
        );

      } 
      catch (err) {
        console.error(err)
      }
    }
  
  )}
)

module.exports = router;