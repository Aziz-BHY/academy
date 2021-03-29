import React, { Component } from 'react';
import CourseDetails from './CourseDetails';
import ShowCourse from './ShowCourse';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class FatherListCourses extends Component {
    constructor(props){
        super(props)
        this.state ={
            next : true,
            teacher : "",
            title : "",
            courses : []
        }
        this.changeFatherStates = this.changeFatherStates.bind(this)
    }
    async changeFatherStates(bool, AllCourses, CourseTeacher, CourseTitle){
        await this.setState({
            next: bool,
            teacher : CourseTeacher,
            title : CourseTitle,
            courses : AllCourses 
        })
        console.log(this.state);
    }
    render() { 
        
        return (
            /*{this.state.next? 
            (   <div>
                    <ShowCourse changeFatherStates={this.changeFatherStates} />
                </div>
            )
            : <div><CourseDetails courses={this.state.courses} teacher={this.state.teacher} title={this.state.title}  /> </div>
            }*/


            <div> 
                <Router>
                    

                    
                </Router>
            </div>
        )
    
    
        
    }
    
}
 
export default FatherListCourses;