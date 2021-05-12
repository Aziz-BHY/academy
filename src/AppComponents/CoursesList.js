import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

function CoursesList(props) {

    const [courses, setCourses] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    //State des elements de material-ui
    const [CategoryCheck, setCategoryCheck] = useState({
        web: false,
        cloud: false,
        programming: false,
    });
    const [LevelCheck, setLevelCheck] = useState({
        Beginner: false,
        Intermediate: false,
        Advanced: false,
    });
    const [value, setValue] = useState([0, 100]); 

    //  Styling des elements de material-ui
    

    const MyCheckbox = withStyles({
        root: {
          color: "#1692bf",
          '&$checked': {
            color: "#1692bf",
          },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const PriceSlider = withStyles({
        root: {
          color: '#1692bf',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      })(Slider);
      
    //les fonctions 
    const getCourses = ()=>{
        let x = "";
        if(searchTerm){
            x="searchTerm="+searchTerm ;
        }

        axios.get("http://localhost:5000/course/searchCourse?"+x+"&check="
        +JSON.stringify(CategoryCheck)+"&price="+JSON.stringify(value)+"&level="+JSON.stringify(LevelCheck) ).then(
            res => setCourses(res.data)
        )
    }
    /*useEffect(()=>{
        let x = "";
        if(searchTerm){
            x="searchTerm="+searchTerm ;
        }

        axios.get("http://localhost:5000/course/courses?"+x+"&check="+JSON.stringify(CategoryCheck) ).then(
            res => setCourses(res.data)
        )
    })*/
    const handleChangeCategory = (event) => {
        console.log(event.target.name, event.target.checked)

        setCategoryCheck({ ...CategoryCheck, [event.target.name]: event.target.checked });

        console.log(CategoryCheck);
       
    };
    const handleChangeLevel = (event) => {
        console.log(event.target.name, event.target.checked)

        setLevelCheck({ ...LevelCheck, [event.target.name]: event.target.checked });

        console.log(LevelCheck);
       
    };
    const handleChangePrice = (event, newValue) => {
        setValue(newValue);
        console.log(value)

      
    };
    
    const handleSearch = (event) => {
        setSearchTerm(event.currentTarget.value) ;
  
    }

    const { web, cloud, programming } = CategoryCheck;
    const { Beginner, Intermediate, Advanced } = LevelCheck;
    
        return ( 
            <main id="main" data-aos="fade-in">

                
                <div className="breadcrumbs">
                <div className="container">
                    <h2>All Courses</h2>
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
                </div>

                
                <section id="courses" className="courses container">
                
                <div className="row mt-5">

                    <div className="col-lg-4 ml-5">
                        
                        <FormControl component="fieldset">
                            <h3>Filter by category</h3>
                            <FormGroup>
                                <FormControlLabel
                                    control={<MyCheckbox checked={web} onChange={handleChangeCategory}  name="web" />}
                                    label="Web development"
                                />
                                <FormControlLabel
                                    control={<MyCheckbox checked={cloud} onChange={handleChangeCategory} name="cloud"  />}
                                    label="Cloud"
                                />
                                <FormControlLabel
                                    control={<MyCheckbox checked={programming} onChange={handleChangeCategory} name="programming"  />}
                                    label="Programming"
                                />
                            </FormGroup>
                            
                        </FormControl>

                        <FormControl component="fieldset">
                            <h3 className="mt-4">Filter by level</h3>
                            <FormGroup>
                                <FormControlLabel
                                    control={<MyCheckbox checked={Beginner} onChange={handleChangeLevel}  name="Beginner" />}
                                    label="Beginner"
                                />
                                <FormControlLabel
                                    control={<MyCheckbox checked={Intermediate} onChange={handleChangeLevel} name="Intermediate"  />}
                                    label="Intermediate"
                                />
                                <FormControlLabel
                                    control={<MyCheckbox checked={Advanced} onChange={handleChangeLevel} name="Advanced"  />}
                                    label="Advanced"
                                />
                                
                            </FormGroup>
                            
                        </FormControl>

                        <h3 className="mt-4 mb-5">Filter by Price</h3>
                        <PriceSlider
                            value={value}
                            onChange={handleChangePrice}
                            valueLabelDisplay="on"
                            
                            
                        />

                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <div data-aos="fade-up">
                        <div className="wrap mb-3">
                            <div className="search" >
                                <input type="text" onChange={handleSearch} className="searchTerm" placeholder="Type keywords .. "/>
                                <button className="searchButton" onClick={getCourses} type="button" >Search <i className="bx bx-search"/></button>
                            </div>
                            
                        </div>
                        
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            {courses.map((elem, index) =>    
                                <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                
                                    <div  className="course-item">
                                        <img src={elem.image} className="img-fluid" alt="..."/>
                                        <div className="course-content">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>{elem.category} </h4>
                                            <p className="price">{elem.price} TND</p>
                                            </div>

                                            <h3><Link to={"/CourseDetails/" +elem._id} >{elem.title} </Link></h3>
                                            <p>{elem.level} </p>
                                            <div className="trainer d-flex justify-content-between align-items-center">
                                                <div className="trainer-profile d-flex align-items-center">
                                                    <span>{elem.teacher.name} </span>
                                                </div>
                                                <div className="trainer-rank d-flex align-items-center">
                                                    <i className="bx bx-user"></i>&nbsp;50
                                                    &nbsp;&nbsp;
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div> 
                            )}
                            </div>
                        </div>
                    </div>
                </div>
                </section>

            </main>
        );
}

 
export default CoursesList;