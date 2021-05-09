import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    
    render() { 
        return ( 
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="/home">Creometry </a></h1>
                    
                    <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="/coursesList" >Courses</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="/profile">Profile</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="/authentification" className="get-started-btn">Get Started ➜ </a>
                    
                </div>
            </header>
        );
    }
}
 
export default HeaderComponent;