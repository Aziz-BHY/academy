import React, { Component } from 'react';
class HomeComponent extends Component {
    
    render() { 
        return ( 
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                <h1>Learning Today,<br/>Leading Tomorrow</h1>
                <a href="/coursesList" className="btn-get-started">Get Started ➜</a>
                </div>
                
            </section>
         );
    }
}
 
export default HomeComponent;