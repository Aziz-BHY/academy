import './App.css';
import Header from './AppComponents/header.component';
import Footer from './AppComponents/footer.component';
import Courses from './AppComponents/courses.component';
import CourseBanner from './AppComponents/courseBanner.component';
import Test from './TestComponents/test';
import HtmlToMD from './TestComponents/HtmlToMD.component';

import FatherAddCourse from './TestComponents/FatherAddCourse';
import Father from './TestComponents/Father';
import AddCourse from './TestComponents/AddCourse';
import ShowCourse from './TestComponents/ShowCourse';
import Navbar from './TestComponents/Navbar';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddCourseContent from './TestComponents/AddCourseContent';
import ShowCourseContent from './TestComponents/ShowCourseContent';
import FatherListCourses from './TestComponents/FatherListCourses';
import CourseDetails from './TestComponents/CourseDetails'

function App() {
  return (

    <div className="container">
      <Router>
        <Navbar />
        

        <Route path="/addCourse">
          <FatherAddCourse />
        </Route>

        <Route path="/listCourse">
          <ShowCourse />
        </Route>

        <Route path="/CourseDetails/:idCourse" component={CourseDetails} >
        </Route>

        <Route path="/showContentCourse">
          <Father />
        </Route>

        <Route path="/addCourseComplete">
          <FatherAddCourse />
        </Route>

      </Router>

      
    </div>

  );
}

export default App;
