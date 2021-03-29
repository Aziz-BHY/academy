import React, { Component } from 'react';
import axios from 'axios';

class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            /*teacher : this.props.teacher,
            title : this.props.title,
            courses : this.props.courses,
            filepath : ""*/
            course : {tags: []},
            MDtext : "",
            outputHTML: ""
            
        }
        axios.get("http://localhost:5000/course/CourseDetail?id="+this.props.match.params.idCourse ).then(
            res => {
                this.setState({
                course : res.data.course,
                MDtext : res.data.fileData
            })
            }
        )
        
    }
    
    HtmlConverter (){
        
        console.log(this.state.MDtext)
        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        outputHtml = converter.makeHtml(this.state.MDtext);

        return { __html: outputHtml };
    }
    
    render() { 
        return ( 
            <div className="container-fluid" >
             

                <h1>Title : {this.state.course.title} </h1>
                <h2>Teacher : {this.state.course.teacher} </h2>
                <h3> Category : {this.state.course.category} </h3>
                <h2>Tags : { this.state.course.tags.map(t => <p>{t.text}, </p> )} </h2>
                <h2>Level : {this.state.course.level} </h2>
                <h2>Language : {this.state.course.language} </h2>
                <h2>Description : {this.state.course.description} </h2>
                
                <h1>Course content : </h1>
                <div>{this.state.outputHTML} </div>
                <div className="mt-4" dangerouslySetInnerHTML={this.HtmlConverter()}  />
            
            </div>
        );
    }
}
 
export default CourseDetails;