import React, { Component } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import {Link} from 'react-router-dom';

class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            course : {tags: []},
            MDtext : "",
            
        }
        
    }
    componentDidMount(){
        axios.get("http://localhost:5000/course/CourseDetail?id="+this.props.match.params.idCourse ).then(
            res => {
                this.setState({
                course : res.data.course,
                MDtext : res.data.fileData
            })
            }
        )
        
    }
    
    render() { 
        return ( 
            <div className="container-fluid" >
             
                <button className="btn btn-light">
                 <Link to={"/ModifyContent/" +this.state.course._id} ><i className="fa fa-edit"/></Link>
                </button>

                <h1>Title : {this.state.course.title} </h1>
                <h2>Teacher : {this.state.course.teacher} </h2>
                <h3> Category : {this.state.course.category} </h3>
                <h2>Tags : { this.state.course.tags.map((t, index) => <p key={index} >{t.text}, </p> )} </h2>
                <h2>Level : {this.state.course.level} </h2>
                <h2>Language : {this.state.course.language} </h2>
                <h2>Description : {this.state.course.description} </h2>
                
                <h1>Course content : </h1>
               
                
            <Markdown>{this.state.MDtext}</Markdown>
            </div>
        );
    }
}
 
export default CourseDetails;