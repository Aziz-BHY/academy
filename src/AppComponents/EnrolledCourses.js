import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Progress from './Progress';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('profile'));
class EnrolledCourses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CoursesList: [],
            email: user?.result.email,

        }
    }
    componentDidMount() {

        axios.post("http://localhost:5000/course/enrolledCourses",
            { email: this.state.email })
            .then(res => this.setState({
                CoursesList: res.data.Courses
            })
            )

    }
    refresh() {
        axios.post("http://localhost:5000/course/enrolledCourses",
            { email: this.state.email })
            .then(res => this.setState({
                CoursesList: res.data.Courses
            })
            )


    }
    render() {
        return (
            <div>
                <button onClick={this.refresh.bind(this)} className="PrimaryButton"><i className="fas fa-sync-alt"></i></button>
                <section id="courses" className="courses container">
                    <div className="row" data-aos="zoom-in" data-aos-delay="100">

                        {
                            this.state.CoursesList.map((e, i) =>

                                <div key={i} className="col-lg-5 col-md-6 d-flex align-items-stretch mb-2">
                                    <div className="course-item">
                                        <img src={e.image} className="img-fluid" alt="..." />
                                        <div className="course-content">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4>{e.category} </h4>

                                            </div>
                                            <h3><Link to={"/CourseDetails/" + e._id}> {e.title} </Link></h3>
                                            <span className="mt-2 mb-2" >{(((e.teacher.progress + 1) / e.sections.length) * 100).toFixed(0)}%</span>
                                            <div className="trainer  justify-content-between align-items-center">

                                                <Progress
                                                    value={((e.teacher.progress + 1) / e.sections.length) * 100}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default EnrolledCourses;