import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Progress from './Progress'

class EnrolledCourses extends Component {
    render() { 
        return ( 
            <div>
                <section id="courses" className="courses container">
                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-5 col-md-6 d-flex align-items-stretch">
                            <div className="course-item">
                                <img src="assets/img/course-1.jpg" className="img-fluid" alt="..."/>
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web </h4>
                                        
                                    </div>
                                    <h3><Link to="/CourseDetails">Website Design from zero</Link></h3>
                                    <div className="trainer  justify-content-between align-items-center">
                                        <Progress value={30} />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
            </div> 
        );
    }
}
 
export default EnrolledCourses;