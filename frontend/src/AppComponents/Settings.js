import React, { Component } from 'react';
import EditProfile from './EditProfile';
import PublishedCourses from './PublishedCourses';
import EnrolledCourses from './EnrolledCourses';
import {Link} from 'react-router-dom'

class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            argument : "",
            style1 :"",
            style2 :"",
            style3 :""
        }

        this.handleClick = this.handleClick.bind(this)
        this.returnComponent = this.returnComponent.bind(this)
    }
    handleClick(arg){
        this.setState ( {
            argument : arg
        })
        if (arg =="edit") this.setState({style1 : "link-active", style2:"", style3:""})
        else if (arg =="enrolled") this.setState({style2 : "link-active" , style1:"", style3:""})
        else if (arg =="published") this.setState({style3 : "link-active" ,style2:"", style1:""})

        //console.log(this.state.argument)
    }
    returnComponent (){
        if (this.state.argument =="edit" ) return (<EditProfile />)
        else if (this.state.argument =="published") return <PublishedCourses />
        else if (this.state.argument =="enrolled") return <EnrolledCourses />

    }
    render() { 
        return ( 
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Settings</h2>
                    </div>
                </div>

                <section>
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            

                            <div className="col-lg-4 pt-4 pt-lg-0 order-1 order-lg-1 content mb-5">
                                <div className="side-bar">
                                    <ul>
                                        <li onClick={()=> this.handleClick("edit")} className={this.state.style1} ><i className="fas fa-angle-double-right"/>
                                            Edit your profile
                                        </li>
                                        <li onClick={()=> this.handleClick("published")} className={this.state.style3}><i className="fas fa-angle-double-right"/>
                                            Published Courses
                                        </li>
                                        <li onClick={()=> this.handleClick("enrolled")} className={this.state.style2}><i className="fas fa-angle-double-right"/>
                                            Enrolled Courses
                                        </li>
                                        <li>
                                            <i className="fas fa-angle-double-right"/>
                                            <Link className="Linky" to="/NewCourse" >Add a new Course</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 order-2 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                {this.returnComponent()}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
 
export default Settings;