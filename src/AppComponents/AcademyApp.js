import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Authentification from './Authentification';
import CoursesList from './CoursesList';
import HeaderComponent from './Header.component';
import HomeComponent from './Home.component';
import CourseDetails from './CourseDetails.js';
import FillProfile from './FillProfile';
import YourProfileInformations from './YourProfileInformations';
import FatherAddCourse from './FatherAddCourse';
import SectionDetails from './SectionDetails';
import ViewPublishedCourse from './ViewPublishedCourse' ;
import EditCourse from './EditCourse';

class AcademyApp extends Component {
    
    render() { 
        return ( 
            <div>
                <Router>
                    <HeaderComponent />
                    <Route path="/home">
                        <HomeComponent />
                    </Route>
                    <Route path="/coursesList">
                        <CoursesList></CoursesList>
                    </Route>
                    <Route path="/authentification">
                        <Authentification />
                        
                    </Route>
                    <Route path="/CourseDetails/:idCourse" component={CourseDetails}>
                        
                    </Route>

                    <Route path="/fillProfile">
                        <FillProfile />
                    </Route>

                    <Route path="/profile">
                        <YourProfileInformations />
                    </Route>
                    <Route path="/NewCourse" >
                        <FatherAddCourse />
                    </Route>
                    <Route path="/SectionDetails/:idCourse/:index" component={SectionDetails} >
                    </Route>

                    <Route path="/ViewPublishedCourse/:idCourse" component={ViewPublishedCourse} >
                    </Route>
                    
                    <Route path ="/EditPublishedCourse/:idCourse" component={EditCourse} >
                    </Route>
                </Router>
                
                
            </div>
            
         );
    }
}
 
export default AcademyApp;