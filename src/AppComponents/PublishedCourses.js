import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PublishedCourses extends Component {
    constructor(props){
        super(props)
        this.state={
            CoursesList : []
        }
        this.click = this.click.bind(this)
    }
    componentDidMount(){
        
        axios.get("http://localhost:5000/course/publishedCourses").then(
            res => this.setState({CoursesList : res.data})
        )    
        console.log(this.state.CoursesList)
    }
    click(){
        console.log(this.state.CoursesList)
    }
    render() { 
        return ( <div>
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
                <tr>
                <th scope="row">1</th>
                <td scope="col">Learn HTML5</td>
                <td scope="col">Active</td>
                <td scope="col">25</td>
                <td scope="col"><Link to="/ViewPublishedCourse"><i className="far fa-eye Link-inblue"/></Link> </td>
                <td scope="col"><i className="far fa-edit inblue"/></td>
                <td scope="col"><i className="far fa-trash-alt inblue"/></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td scope="col">Learn CSS3 from 0</td>
                <td scope="col">Pending</td>
                <td scope="col">0</td>
                <td scope="col"><Link to="/ViewPublishedCourse"><i className="far fa-eye Link-inblue"/></Link></td>
                <td scope="col"><i className="far fa-edit inblue"/></td>
                <td scope="col"><i className="far fa-trash-alt inblue"/></td>
                </tr>
            </tbody>
            </table>
            <button onClick={this.click} >warini</button>
        </div> );
    }
}
 
export default PublishedCourses;