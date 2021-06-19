const router = require("express").Router();
let Course = require('../models/course.model')
let User = require('../models/user.model');

router.route('/add').post(async (req, res) => {
  const newCourse = new Course({
    title: req.body.title,
    teacher: req.body.teacher,
    category: req.body.category,
    language: req.body.language,
    level: req.body.level,
    description: req.body.description,
    tags: req.body.tags,
    price: req.body.price,
    image: req.body.image,
    status: req.body.status,
    student: 0,
    stars: 0,
    path: '',

  })
  let idCourse = ""
  await newCourse.save(function (err, room) {
    idCourse = room._id
    res.json({ added: "yes", id: idCourse })
  })
})

//we use it in case we had one section only ..
router.route('/addContent').post((req, res) => {

  var fs = require('file-system');
  fs.writeFile(req.body.path, req.body.content, function (err) { "error error" })

  Course.find({ title: req.body.title, teacher: req.body.teacher })
    .then(courses => {
      courses[0].path = req.body.path
      courses[0].save()
    })
  res.json("content added")
})

router.route('/addSections').post(async (req, res) => {

  var sections = req.body.sections;
  var fs = require('file-system');
  var sectionTitle = [];

  var ThePath = 'AcademyFiles/' + req.body.emailTeacher + '/' + req.body.id;
  console.log(ThePath)

  sections.map((e, index) => {
    var sectionPath = ThePath + '/' + e.title + '.md';
    fs.writeFile(sectionPath, e.content, function (err) { "error error" })
    sectionTitle.push(e.title)
  })
  console.log(sectionTitle);

  await Course.findById(req.body.id)
    .then(courses => {
      courses.sections = sectionTitle
      courses.path = ThePath
      courses.save()
    })
  res.json("content added")
})

router.route('/publishedCourses').post((req, res) => {
  var result = []
  User.findOne({ email: req.body.email })
    .then(e => {
      e.published.map((elem, index) => {
        Course.findById(elem)
          .then(eachCourse => {
            if (eachCourse != null) {
              result.push(eachCourse)
              //console.log("each Course :"+ result +" \n ____________________")
            }
            if (index === e.published.length - 1) {
              res.json(result)
            }
          })

      })
    })
})

router.route('/enrolledCourses').post((req, res) => {
  var result = []
  User.findOne({ email: req.body.email })
    .then(e => {
      e.enrolled.map((elem, index) => {
        Course.findById(elem.id)
          .then(eachCourse => {
            eachCourse.teacher.progress = elem.progress
            result.push(eachCourse)
            console.log("each Course :" + result + " \n ____________________")
            if (index === e.enrolled.length - 1) {
              //console.log("p --> " + elem.progress)
              res.json({ Courses: result })
            }
          })

      })
    })
})

router.route('/searchCourse').get((req, res) => {
  let checkedList = JSON.parse(req.query.check);
  let price = JSON.parse(req.query.price);
  let level = JSON.parse(req.query.level);

  let categoryTrue = [];
  for (let i in checkedList) {
    if (checkedList[i] == true)
      categoryTrue.push(i)
  }
  let levelTrue = [];
  for (let i in level) {
    if (level[i] == true)
      levelTrue.push(i)
  }

  Course.find({ status: "active" })
    .then(async foundCourses => {
      foundCourses = foundCourses.filter((course) => {
        return (((course.price * 1) >= price[0] * 1) && ((course.price * 1) <= (price[1] * 1)));

      })
      if (categoryTrue.length != 0)
        foundCourses = foundCourses.filter((course) => categoryTrue.includes(course.category))
      if (levelTrue.length != 0)
        foundCourses = foundCourses.filter((course) => levelTrue.includes(course.level))
      if (req.query.searchTerm) {
        foundCourses = foundCourses.filter((course) => (course.title.includes(req.query.searchTerm))
          || (course.description.includes(req.query.searchTerm))
          || (course.tags.includes(req.query.searchTerm))
            /*|| (course.teacher.includes(req.query.searchTerm))*/)
      }
      var img = ""
      for (let cour of foundCourses) {
        await User.findOne({ email: cour.teacher.email }).then(user => {
          cour.teacher.name = user.name,
            cour.teacher.img = user.image
        })
      }
      //console.log(foundCourses)

      res.json({ courses: foundCourses, teacherImage: img })
    })
})

router.route('/CourseDetail').get((req, res) => {
  Course.findById(req.query.id).then(
    elem => {
      User.findOne({ email: elem.teacher.email }).then(user => {
        elem.teacher.name = user.name
        res.json(
          { course: elem }
        );
      })
    }
  ).catch(err => console.log(err))
})

router.route('/SectionDetails').get((req, res) => {
  var fs = require('fs');
  var SectionDetail = []
  User.findOne({ email: JSON.parse(req.query.user).result.email }).then(user => {
    let access = false;
    for (let enroll of user.enrolled) {
      if (enroll.id == req.query.id) {
        access = true;
        break;
      }
    }
    if (!access) {
      res.json({ error: "Don't have access" });
      return;
    }

    Course.findById(req.query.id).then(
      elem => {
        var title = elem.title
        var sections = elem.sections
        var path = elem.path
        try {
          sections.map((e, i) => {
            var data = fs.readFileSync(path + "/" + e + ".md", 'utf8')
            var x = { title: e, content: data }
            SectionDetail.push(x)
          })
          res.json(
            {
              sections: SectionDetail,
              title: title
            }

          );
        }
        catch (err) {
          console.error(err)
        }
      }

    )
  })
}
)

router.route('/modifyContent').post(async (req, res) => {
  const fs = require('fs')

  var sections = req.body.course.sections;
  var path = 'AcademyFiles/' + req.body.course.teacherEmail + '/' + req.body.course._id;

  Course.findById(req.body.course._id).then(
    elem => {
      let sec = []
      for (let section of sections) {
        sec.push(section.title)
      }

      //we remove the directory with the old files
      fs.readdir(path, (err, files) => {
        if (err) throw err;

        for (const file of files) {
          fs.unlink(path + "/" + file, err => {
            if (err) throw err;
          });
        }
      });
      /*fs.rmdir(path, { recursive: true }, (err) => {
       if (err) {
           console.log(err)
       }
   
       console.log(`directory deleted! bcs will we create another one`);
     });  */
      elem.sections = sec
      elem.title = req.body.course.title,
        elem.level = req.body.course.level,
        elem.description = req.body.course.description,
        elem.category = req.body.course.category,
        elem.language = req.body.course.language,
        elem.tags = req.body.course.tags
      elem.price = req.body.course.price,
        elem.image = req.body.course.image,

        elem.save().then(() => {
          console.log("meta data saved");

          //we create a new directory with the new content
          sections.map((e, index) => {
            var sectionPath = path + '/' + e.title + '.md';
            fs.writeFile(sectionPath, e.content, function (err) { "error error" })
            console.log("i saved the file : " + sectionPath)
          })

        })


      res.json("course very well updated")
    }
  )
})

router.route('/deleteCourse').post((req, res) => {
  const fs = require('fs')
  User.findOne({ email: req.body.email }).then((user) => {
    user.published = user.published.filter(f => {
      return (f != req.body.id)
    })
    user.save()
  })

  User.find().then((user) => {
    user.forEach(element => {

      element.enrolled = element.enrolled.filter(f => {
        return (f.id != req.body.id)
      })
      element.save()
    });

  })

  Course.findByIdAndDelete(req.body.id).then((e) => {
    const path = e.path
    console.log(path)
    fs.rmdir(path, { recursive: true }, (err) => {
      if (err) {
        console.log(err)
      }

      console.log(`directory deleted!`);
    });
    res.json("course deleted")
  })

})


module.exports = router;