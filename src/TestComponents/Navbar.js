import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light mt-4 mb-4">

                    <a className="navbar-brand">
                        <Link to="/">
                            Academy
                        </Link>
                    </a>

                   
                    
                    <button className="btn btn-sm btn-outline-secondary">
                        <Link to="/addCourse">
                            Add a course
                        </Link>
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                        <Link to="/listCourse">
                            List of Courses
                        </Link>
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                        <Link to="/showContentCourse">
                            Show course content 
                        </Link>
                    </button>

                

                </nav>

                
            </div>
         );
    }
}
 
export default Navbar;