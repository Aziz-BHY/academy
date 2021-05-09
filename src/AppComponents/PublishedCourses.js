import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PublishedCourses extends Component {
    constructor(props){
        super(props)
        this.state={
            CoursesList : []
        }
    }
    componentDidMount(){
        
        axios.get("http://localhost:5000/course/publishedCourses").then(
            res => this.setState({CoursesList : res.data})
        )    
        console.log(this.state.CoursesList)
    }
    refresh(){
        axios.get("http://localhost:5000/course/publishedCourses").then(
            res => this.setState({CoursesList : res.data})
        )    
        console.log(this.state.CoursesList)
    }
    render() { 
        return ( <div>
            <button onClick= {this.refresh.bind(this) } className="PrimaryButton"><i className="fas fa-sync-alt"></i></button>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Students</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
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
                        <td scope="col">0</td>
                        <td scope="col"><Link to={"/ViewPublishedCourse/"+e._id} ><i className="far fa-eye Link-inblue"/></Link> </td>
                        <td scope="col"><Link to={"/EditPublishedCourse/"+e._id} ><i className="far fa-edit Link-inblue"/></Link> </td>
                        <td scope="col"><i className="far fa-trash-alt Link-inblue"/></td>
                        </tr>
                    )
                }

                
            </tbody>
            </table>
        </div> );
    }
}
 
export default PublishedCourses;