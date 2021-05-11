const router = require ("express").Router();
let User = require('../models/user.model');

router.route('/').post((req, res)=>{
    User.find({email : req.body.email})
        .then(x=> 
            {
                if (x.length == 0){
                    const newUser = new User({
                    
                        email : req.body.email,
                        name : req.body.name,
                        /*organisations : req.body.organisations,
                        post : req.body.post,
                        intrests : req.body.intrests,*/
                        
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
              elem[0].save()
            })
    res.json("content added")
  })
  
module.exports = router;