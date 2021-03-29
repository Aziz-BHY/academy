import React, { Component } from 'react';
import AddCourse from './AddCourse';
import AddCourseContent from './AddCourseContent';


class FatherAddCourse extends Component {
    constructor(props){
        super(props)
        this.state ={
            next : true,
            teacher : "",
            title : ""
        }
        this.changeFatherStates = this.changeFatherStates.bind(this)
    }
    async changeFatherStates(bool, CourseTeacher, CourseTitle){
        await this.setState({
            next: bool,
            teacher : CourseTeacher,
            title : CourseTitle
        })
        console.log(this.state);
    }
    render() { 
        
        return (
            this.state.next? (<div>
                <AddCourse changeFatherStates={this.changeFatherStates}>

                </AddCourse>

            </div>)
            : <div><AddCourseContent teacher={this.state.teacher} title={this.state.title} /> </div>
        )
    
    
        
    }
    
}
 
export default FatherAddCourse;