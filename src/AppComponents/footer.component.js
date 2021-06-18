import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
                <div className="container">

                    <div className="up-footer">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget text-widget">
                                    <a href="index.html" className="footer-logo"><img src="images/logo_light.svg" alt=""/></a>
                                    <p>We named our theme Studiare because to us,<br/> the best brands are simple ones. Brands thrive<br/> on their ability to be understood.</p>
                                    <ul>
                                        <li>
                                            <div className="contact-info-icon">
                                                <i className="material-icons">location_on</i>
                                            </div>
                                            <div className="contact-info-value">127 Elizabeth Street, NY New York</div>
                                        </li>
                                        <li>
                                            <div className="contact-info-icon">
                                                <i className="material-icons">phone_android</i>
                                            </div>
                                            <div className="contact-info-value">+55-11-3097-0508</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget quick-widget">
                                    <h2>Quick Links</h2>
                                    <ul className="quick-list">
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="pricing.html">Pricing Packages</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="courses.html">Courses</a></li>
                                        <li><a href="blog.html">News</a></li>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Sample Page</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget subscribe-widget">
                                    <h2>Newsletter</h2>
                                    <p>Don’t miss anything, sign up now and keep informed about our company.</p>
                                    <div className="newsletter-form">
                                        <input className="form-control" type="email" name="EMAIL" placeholder="Enter Your E-mail" required=""/>
                                        <input type="submit" value="Subscribe"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

			<div className="footer-copyright copyrights-layout-default">
				<div className="container">
					<div className="copyright-inner">
						<div className="copyright-cell"> &copy; 2019 <span className="highlight">Studiare</span>. Created by CodeBean Team.</div>
						<div className="copyright-cell">
							<ul className="studiare-social-links">
								<li><a href="#" className="facebook"><i className="fa fa-facebook-f"></i></a></li>
								<li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</footer>
         );
    }
}
 
export default Footer;