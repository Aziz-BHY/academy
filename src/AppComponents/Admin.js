import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteDialog from './DeleteDialog';
class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
            CoursesList : [],
            CoursePending: [],
            openDelete : false,
            load: false
        }
        this.validateCourse=this.validateCourse.bind(this)
    }
    componentDidMount(){
        
        axios.post("http://localhost:5000/admin/allCourses", {
            user: localStorage.getItem("profile")
        })
            .then(res =>{ 
                if(res.data.error){
                    window.location.href="/home"
                }
                else{
                    this.setState({load: true})
                    for(let course of res.data){
                        if(course.status == "pending") this.setState({CoursePending: [...this.state.CoursePending, course]})
                        if(course.status == "active") this.setState({CoursesList: [...this.state.CoursesList, course]})
    
                    }
                }
            }
            
        )    
    }
    deleteCourse(id, email){
        
        axios.post("http://localhost:5000/course/deleteCourse" , {
            id : id,
            email :email
        }).then
        (res => console.log(res.data))
        window.location.reload(false);
    }
    validateCourse(id){
        
        axios.post("http://localhost:5000/admin/validateCourse" , {
            id : id,
            
        }).then
        (res => console.log("ok"))
        window.location.reload(false);
    }
    closeDialog(){
        this.setState({ openDelete: false });
    }
    openDialog(){
        this.setState({ openDelete : true });
    }
    render() { 
        if(this.state.load)
        return ( 
            <div >
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2> Admin Dashboard</h2>
                    </div>
                </div>
                <div className="container-sm mt-3">
                <h3>
                    Pending courses
                </h3>
                <div className="container-fluid mt-3 mb-4">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                            <th scope="col">Validate</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.CoursePending.map((e, i)=>
                                
                                    <tr key={i} >
                                    <th scope="row">{i+1} </th>
                                    <td scope="col">{e.title} </td>
                                    <td scope="col">{e.status} </td>
                                    <td scope="col"><Link to={"/CourseDetails/"+e._id} ><i className="far fa-eye Link-inblue"/></Link> </td>
                                    <td scope="col">
                                        <i className="fas fa-check-circle Link-inblue"
                                            onClick={()=> this.validateCourse(e._id)}
                                        /> 
                                    </td>
                                    <td scope="col">
                                        <i className="far fa-trash-alt Link-inblue"
                                            onClick={this.openDialog.bind(this)}
                                            
                                        />
                                        <DeleteDialog 
                                            open={this.state.openDelete}
                                            handleClose={this.closeDialog.bind(this)}
                                            handleAgree={()=>this.deleteCourse(e._id,e.teacher.email)}
                                        />
                                    </td>
                                    </tr>

                                    
                                )
                            }

                            
                        </tbody>
                    </table>
                </div>
                
                <h3>
                    Active courses
                </h3>
                <div className="container-fluid mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">Students</th>
                            <th scope="col">View</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.CoursesList.map((e, i)=>
                                
                                    <tr key={i} >
                                    <th scope="row">{i+1} </th>
                                    <td scope="col">{e.title} </td>
                                    <td scope="col">{e.status} </td>
                                    <td scope="col">{e.student} </td>
                                    <td scope="col"><Link to={"/CourseDetails/"+e._id} ><i className="far fa-eye Link-inblue"/></Link> </td>
                                    
                                    <td scope="col">
                                        <i className="far fa-trash-alt Link-inblue"
                                            onClick={this.openDialog.bind(this)}
                                            
                                        />
                                        <DeleteDialog 
                                            open={this.state.openDelete}
                                            handleClose={this.closeDialog.bind(this)}
                                            handleAgree={()=>this.deleteCourse(e._id,e.teacher.email)}
                                        />
                                    </td>
                                    </tr>

                                    
                                )
                            }

                            
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        );
        else return(<p>Loading</p>)
    }
}
 
export default Admin;