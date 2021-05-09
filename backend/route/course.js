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
    price : req.body.price,
    image : req.body.image,
    status : req.body.status
    
    
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
  res.json("content added")
})

router.route('/addSections').post((req, res) =>{
  var sections = req.body.sections ;
  var path = 'AcademyFiles/'+req.body.teacher+'/'+ req.body.title ;
  var fs = require('file-system');
  var sectionTitle =[];

  sections.map((e,index)=> {
    var sectionPath = path +'/' + e.title + '.md';
    fs.writeFile(sectionPath , e.content, function(err) {"error error"})
    sectionTitle.push(e.title)
  })

  Course.find({title :req.body.title , teacher:req.body.teacher})
        .then(courses => 
          {
            courses[0].path=path
            courses[0].sections = sectionTitle
            courses[0].save()
          })
  res.json("content added")
})

router.route('/publishedCourses').get((req,res)=>{
  Course.find()
        .then (x =>
          res.json(x)
          )
})

router.route('/searchCourse').get((req, res) =>{
  let checkedList = JSON.parse(req.query.check);
  let price = JSON.parse(req.query.price);
  let level =JSON.parse(req.query.level);

  let categoryTrue =[];
    for (let i in checkedList){
      if (checkedList[i]==true )
      categoryTrue.push(i)
    }
  let levelTrue=[];
  for (let i in level){
    if (level[i]==true )
    levelTrue.push(i)
  }
   
    Course.find()
          .then (foundCourses => {
            foundCourses=foundCourses.filter((course)=>{
              return( ((course.price*1)>=price[0]*1) && ((course.price*1)<=(price[1]*1)) );

            })
            if(categoryTrue.length != 0)
            foundCourses=foundCourses.filter((course)=> categoryTrue.includes(course.category))
            if(levelTrue.length != 0)
            foundCourses=foundCourses.filter((course)=> levelTrue.includes(course.level))
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
    elem => {
      try {
        res.json(
          {course : elem}
        );
      } 
      catch (err) {
        console.error(err)
      }
    }
  )}
)
router.route('/SectionDetails').get((req, res) =>
  {
    var fs = require('fs');
    var SectionDetail =[]
    Course.findById(req.query.id ).then(
    elem => {
        var title = elem.title
        var sections = elem.sections
        var path = elem.path
      try {
        sections.map((e,i)=>
        {
          var data = fs.readFileSync(path+"/"+e+".md", 'utf8')
          var x={title:e,content:data}
          SectionDetail.push(x)
        })
        res.json(
          {sections : SectionDetail,
          title : title }
          
        );
      } 
      catch (err) {
        console.error(err)
      }
    }
  
  )}
)
router.route('/modifyContent').post((req,res)=>{
  /*var fs = require('fs');
  var SectionDetail =[]
  Course.findById(req.body.id ).then(
  elem => {
      var sections = elem.sections
      var path = elem.path
    try {
      sections.map((e,i)=>
      {
        var data = fs.readFileSync(path+"/"+e+".md", 'utf8')
        var x={title:e,content:data}
        SectionDetail.push(x)
      })
      res.json(
        {sections : SectionDetail}
        
      );
    } 
    catch (err) {
      console.error(err)
    }*/
    
  Course.findById(req.body.id ).then(
    elem =>{
      elem.title = req.body.course.title ,
      elem.teacher = req.body.course.teacher ,
      elem.level = req.body.course.level ,
      elem.description = req.body.course.description ,
      elem.category = req.body.course.category ,
      elem.language = req.body.course.language ,
      elem.tags = req.body.course.tags 
      elem.price = req.body.price,
      elem.image = req.body.image,
      elem.title = req.body.sectionTitle

      elem.save().then(()=> 
        {res.json("course very well updated")})
    }
  ).catch(err=> console.log(err))

})

router.route('/deleteCourse').post((req, res) =>{
  const fs = require('fs')

    Course.findByIdAndDelete(req.body.id).then((e)=>{
      const path = e.path
      fs.rmdir(path, { recursive: true }, (err) => {
        if (err) {
            console.log(err)
        }
    
        console.log(`directory deleted!`);
    });
      res.json("course deleted")})
})

module.exports = router;