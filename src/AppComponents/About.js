import React, { Component } from 'react';
class About extends Component {

    render() {
        return (
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>About Us</h2>
                    </div>
                </div>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                <img src="assets/img/course-details-tab-2.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Creometry academy is the place where we share our knowledge with our community and the world. </h3>
                                <br/>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> 
                                        As part of the Creometry ecosystem, we aim to promote free and open-source software and help everyone onboard their cloud-native journey.
                                    </li>
                                    <br/>
                                    <li><i className="bi bi-check-circle"></i> 
                                        Creometry’s team members took the same path to build their platform, and are now sharing what they learned with you.
                                    </li>
                                </ul>
                                

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
export default About;