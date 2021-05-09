import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light mt-4 mb-4">

                    <span className="navbar-brand">
                        <Link to="/" className="Linky">
                            Academy
                        </Link>
                    </span>

                   
                    
                    <button className="btn btn-sm btn-outline-secondary">
                        <Link to="/addCourse" className="Linky">
                            Add a course
                        </Link>
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                        <Link to="/listCourse" className="Linky">
                            List of Courses
                        </Link>
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                        <Link to="/testing" className="Linky">
                            Testing 
                        </Link>
                    </button>

                

                </nav>

                
            </div>
         );
    }
}
 
export default Navbar;