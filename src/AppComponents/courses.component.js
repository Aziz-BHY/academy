import React, { Component } from 'react';
import CourseBanner from './courseBanner.component';
class Courses extends Component {
    state = {  }
    render() { 
        return ( 
    <div>       
		<section className="page-banner-section">
			<div className="container">
				<h1>Courses</h1>
				<ul className="page-depth">
					<li><a href="index.html">Home</a></li>
					<li><a href="courses.html">Courses</a></li>
				</ul>
			</div>
		</section>
		
		
		<section className="courses-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="courses-top-bar">
							<div className="courses-view">
								<a href="#" className="grid-btn active">
									<i className="fa fa-th-large" aria-hidden="true"></i>
								</a>
								
								<span>Showing all results</span>
							</div>
							<form className="search-course">
								<input type="search" name="search" id="search_course" placeholder="Search Courses..." />
								<button type="submit">
									<i className="material-icons">search</i>
								</button>
							</form>
						</div>

						<div className="row">

                        <CourseBanner></CourseBanner>
                        <CourseBanner></CourseBanner>
                        <CourseBanner></CourseBanner>
						
						</div>
					</div>

					<div className="col-lg-4">
						<div className="sidebar">

							<div className="category-widget widget">
								<h2>Product categories</h2>
								<ul className="category-list">
									<li><a href="#">Design</a></li>
									<li><a href="#">Photography</a></li>
									<li><a href="#">Technology</a></li>
									<li><a href="#">Web Design</a></li>
									<li><a href="#">Web Development</a></li>
								</ul>
							</div>

							<div className="ads-widget widget">
								<a href="#">
									<img src="upload/blog/ad-banner.jpg" alt=""/>
								</a>
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
 
export default Courses;