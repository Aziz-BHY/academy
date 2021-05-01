import React, { Component } from 'react';

import FatherAddCourse from './FatherAddCourse';

import ShowCourse from './ShowCourse';
import Navbar from './Navbar';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import CourseDetails from './CourseDetails'

import ModifyContent from './ModifyContent';

class AppTesting extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Router>

                <Navbar />


                <Route path="/addCourse">
                <FatherAddCourse />
                </Route>

                <Route path="/listCourse">
                <ShowCourse />
                </Route>

                <Route path="/testing">
                
                </Route>


                <Route path="/CourseDetails/:idCourse" component={CourseDetails} >
                </Route>

                <Route path="/ModifyContent/:idCourse" component={ModifyContent} >
                </Route>

                </Router>

            </div>
         );
    }
}
 
export default AppTesting;