import React, { Component } from 'react';
import NewCourse from './NewCourse';
import AddSection from './AddSections';


class FatherAddCourse extends Component {
    constructor(props){
        super(props)
        this.state ={
            next : true,
            id : "",
            
        }
        this.changeFatherStates = this.changeFatherStates.bind(this)
    }
    async changeFatherStates(bool, CourseId){
        await this.setState({
            next: bool,
            id : CourseId
        })
        console.log(this.state);
        console.log("course id" + this.state.id)
    }
    render() { 
        
        return (
            this.state.next? (<div>
                <NewCourse changeFatherStates={this.changeFatherStates}>

                </NewCourse>

            </div>)
            : <div><AddSection id={this.state.id}  /> </div>
        )
    
    
        
    }
    
}
 
export default FatherAddCourse;