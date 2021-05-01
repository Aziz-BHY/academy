import React, { Component } from 'react';
import Progress from './Progress'
import {Link} from 'react-router-dom';

class ViewOublishedCourse extends Component {
    render() { 
        return ( 
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Website Design from zero</h2>
                    </div>
                </div>
                <div className="container-sm mt-5" >
                    <button className="edit-button" >
                        <Link to="/EditCourse" className="Linky"> <i className="far fa-edit"/> Edit this course </Link>
                    </button>
                    <button className="delete-button" >
                        <i className="far fa-trash-alt"/> Delete this course
                    </button>
                </div>
                <section id="course-details" className="course-details">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-8">
                                <img src="assets/img/course-1.jpg" className="img-fluid" alt=""/>
                                <h3 className="mb-3" >What i'm gonna learn</h3>
                                <p>
                                Qui et explicabo voluptatem et ab qui vero et voluptas. Sint voluptates temporibus quam autem. Atque nostrum voluptatum laudantium a doloremque enim et ut dicta. Nostrum ducimus est iure minima totam doloribus nisi ullam deserunt. Corporis aut officiis sit nihil est. Labore aut sapiente aperiam.
                                Qui voluptas qui vero ipsum ea voluptatem. Omnis et est. Voluptatem officia voluptatem adipisci et iusto provident doloremque consequatur. Quia et porro est. Et qui corrupti laudantium ipsa.
                                Eum quasi saepe aperiam qui delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui numquam eum iste est dolorum. Rem voluptas ut sit ut.
                                </p>

                            </div>
                            <div className="col-lg-4">

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-money-bill-alt inblue icon-mr"></i> Course fee</h5>
                                <p className="inblue">56 TND</p>
                                </div>
                                
                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-user inblue icon-mr"></i> Trainer</h5>
                                <p className="inblue">Anna Lucia</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-bookmark inblue icon-mr"></i> Category</h5>
                                <p className="inblue">Web</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="fas fa-globe inblue icon-mr"></i> Language</h5>
                                <p className="inblue">English</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="fas fa-spell-check inblue icon-mr"></i> Level of the course</h5>
                                <p className="inblue">Beginner</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="fas fa-tasks inblue icon-mr"></i> Sections</h5>
                                <p className="inblue">4</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5 className="inblue icon-mr"><i className="fas fa-award icon-mr"></i> Certificate of completion</h5>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn-outlined">Enroll this course</button>
                                </div>
                            </div>
                        </div>
                            <h3>Course Sections</h3>
                            <div className="single-section">
                                <div className="row mt-2 mb-2 container">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        
                                        <span className="section-title">
                                            <b className="icon-mr inblue">1.</b>
                                            Introduction lesson
                                        </span>
                                    </div>
                                    
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <button className="btn-get-started mt-1">
                                            <Link to="/SectionDetails" className="Linky"> View details</Link> 
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <h3>Reviews</h3>
                            <div className="single-section">
                                <div>
                                    <span className="user-name">
                                        Emilia Clarcke
                                    </span>
                                    <span className="review">
                                        5 <i class="far fa-star"></i>
                                    </span>
                                    <p className="comment">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut sed, dolorum asperiores perspiciatis provident,
                                        odit maxime doloremque aliquam.
                                    </p>
                                </div>
                            </div>

                            <h3>Submit your own review</h3>
                            <div className="single-section">
                                <select className="input-star">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>

                                </select>
                                <span className="review">
                                    <i class="far fa-star"></i>
                                </span>
                                <br/>
                                <textarea type="text" className="input-comment" placeholder="Type your comment here ..."/>
                                <br/>
                                <button className="PrimaryButton" >Submit</button>
                            </div>

                    </div>
                </section>
            </div> 
        );
    }
}
 
export default ViewOublishedCourse;