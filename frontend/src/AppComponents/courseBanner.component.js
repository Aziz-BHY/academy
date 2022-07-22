import React, { Component } from 'react';
class CourseBanner extends Component {
    state = {  }
    render() { 
        return ( 
            
                <div className="col-lg-4 col-md-6 col-sm-6">
								<div className="course-post">
									<div className="course-thumbnail-holder">
										<a href="single-course.html">
											<img src="upload/courses/3.jpg" alt=""/>
										</a>
									</div>
									<div className="course-content-holder">
										<div className="course-content-main">
											<h2 className="course-title">
												<a href="single-course.html">Environmental Science BTEC Course</a>
											</h2>
											<div className="course-rating-teacher">
												<div className="star-rating has-ratings" title="Rated 5.00 out of 5">
													<span style={{width:'100%'}}>
														<span className="rating">No Votes</span>
													</span>
												</div>
												<a href="#" className="course-loop-teacher">Linda Castello</a>
											</div>
										</div>
										<div className="course-content-bottom">
											<div className="course-students">
												<i className="material-icons">group</i>
												<span>0</span>
											</div>
											<div className="course-price">
												<span>18.99 TND</span>
											</div>
										</div>
									</div>
								</div>
							</div>
            
         );
    }
}
 
export default CourseBanner;