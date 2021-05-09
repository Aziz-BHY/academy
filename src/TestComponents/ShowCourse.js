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
    
    const deleteCourse = (id) =>{
        
        axios.post("http://localhost:5000/course/deleteCourse" , {id : id}).then
        (res => getCourses())
    }

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
                                    <th>Details</th>
                                    <th>Modify</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>

                {
                    courses.map((elem, index) =>
                        
                            <tbody key={index} >
                                
                                    <tr >
                                    <th scope="row">{index +1 }</th>
                                    <td>{elem.title }</td>
                                    <td>{elem.teacher} </td>
                                    <td>{elem.description} </td>
                                    <td>
                                    {
                                        elem.tags.map((t , i)=>
                                            <div key={index+500+i}>
                                                <p>{t.text}, </p>
                                            </div>
                                            )
                                    }
                                    </td>
                                    <td>{elem.category} </td>
                                    
                                    <td><button className="btn btn-light"><Link className="Linky" to={"/CourseDetails/" +elem._id}><i className="fa fa-eye"/></Link></button> </td>
                                    <td><button className="btn btn-light"><Link  to={"/ModifyContent/" +elem._id} ><i className="fa fa-edit"/></Link></button></td>
                                    <td><button className="btn btn-danger" onClick={()=>deleteCourse(elem._id)} ><i className="fa fa-trash"/></button></td>
                                    
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