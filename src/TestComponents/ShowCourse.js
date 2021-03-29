import axios from 'axios';
import React, { Component } from 'react';
import {useEffect, useState} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';

function ShowCourse(props) {

    const [courses, setCourses] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    

    const getCourses = ()=>{
        let x = "";
        if(searchTerm){
            x="searchTerm="+searchTerm ;
        }

        axios.get("http://localhost:5000/course/courses?"+x+"&check="+JSON.stringify(checking) ).then(
            res => setCourses(res.data)
        )
    }

    const handleSearch = (event) => {
       setSearchTerm(event.currentTarget.value) ;

       
    }
    //checkbox controls :
    const [checking, setChecking] = useState({
        web: false,
        cloud: false,
        programming: false,
    });
    
    const handleChange = (event) => {
        console.log(event.target.name, event.target.checked)

        setChecking({ ...checking, [event.target.name]: event.target.checked });

        console.log(checking);
       
    };
    
    const { web, cloud, programming } = checking;
    
    return ( 
            <div className="container mt-3">

                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose a category</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={web} onChange={handleChange}  name="web" />}
                        label="Web development"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={cloud} onChange={handleChange} name="cloud"  />}
                        label="Cloud"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={programming} onChange={handleChange} name="programming"  />}
                        label="Programming"
                    />
                    </FormGroup>
                    
                </FormControl>

                <h1 className="text-info"> List of courses : </h1>
                <form className="d-flex">
                    <input  onChange={handleSearch} className="form-control me-3 mr-2" placeholder="Search for a course"  />
                </form>

                <div className="d-grid gap-2 mt-4">
                    <button className="btn btn-outline-success btn-lg mb-3" onClick={getCourses}>Show  courses </button>
                </div>
                <div>
                            <table className="table">
                                <thead>
                                    <tr className="table-info">
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Teacher</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Tags</th>
                                    <th scope="col">Category</th>
                                    </tr>
                                </thead>

                {
                    courses.map((elem, index) =>
                        
                            <tbody>
                                
                                
                                    <tr /* onClick={(e)=>{props.changeFatherStates(false,courses,elem.teacher,elem.title)}} */ >
                                    <th scope="row"><Link to={"/CourseDetails/" +elem._id} >{index +1 }</Link></th>
                                    <td><Link to={"/CourseDetails/" +elem._id} >{elem.title }</Link></td>
                                    <td><Link to={"/CourseDetails/" +elem._id} >{elem.teacher} </Link></td>
                                    <td><Link to={"/CourseDetails/" +elem._id} >{elem.description} </Link></td>
                                    <td><Link to={"/CourseDetails/" +elem._id} >
                                    {
                                        elem.tags.map(t =>
                                            <div>
                                                <p>{t.text}, </p>
                                            </div>
                                            )
                                    }
                                    </Link></td>
                                    <td><Link to={"/CourseDetails/" +elem._id} >{elem.category}</Link> </td>
                                    </tr>
                                
                            </tbody>
                            
                    )
                }
                </table>
                            
                            </div>
            </div>
         );
    
}
 
export default ShowCourse;