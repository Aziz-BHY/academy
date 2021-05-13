import React, { Component } from 'react';
import Progress from './Progress'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const user = JSON.parse(localStorage.getItem('profile'));

const StyledRating = withStyles({
    iconFilled: {
      color: '#4ab6dd',
    },
    iconHover: {
      color: '#1692bf',
    },
  })(Rating);
class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            course : {sections:[], teacher:{name:"",email:""}},
            sectionsList : [],
            getrate:3,
            setrate:0,
        }
        //this.setImage =this.setImage.bind(this)
        this.enroll =this.enroll.bind(this)
    }
    componentDidMount(){
        axios.get("http://localhost:5000/course/CourseDetail?id="+this.props.match.params.idCourse ).then(
            res => {
                console.log(res.data.course)
                this.setState({
                course : res.data.course,
                sectionsList : res.data.course.sections
                
            })
            }
        )
        
    }
    enroll(){
        console.log( "email :  "+user?.result.email  +" -- id:  "+this.props.match.params.idCourse)
        axios.post("http://localhost:5000/user/addEnrolled", {
            email :user?.result.email  ,
            id:this.props.match.params.idCourse
        }).then(res=>{
            if (res.data == "yes") {
                console.log("Enrolled with success ;)" )
                
            }
        })   
         
    }
    /*setImage(img){
        const empty_img ="https://fr.metrotime.be/wp-content/uploads/2020/09/placeholder-image.png";
        console.log("image link :"+ img)
        if (img ===""){
            return empty_img
        }
        else return img
        
    }*/
    render() { 
        return ( 
            <div>
                
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>{this.state.course.title}</h2>
                    </div>
                </div>

                    
                <section id="course-details" className="course-details">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-8">
                                <img src={this.state.course.image} 
                                    className="img-fluid" alt=""
                                />
                                <h3 className="mb-3" >What i'm gonna learn</h3>
                                <p>
                                    {this.state.course.description}
                                </p>

                            </div>
                            <div className="col-lg-4">

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-money-bill-alt inblue icon-mr"></i> Course fee</h5>
                                <p className="inblue">{this.state.course.price}</p>
                                </div>
                                
                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-user inblue icon-mr"></i> Trainer</h5>
                                <p className="inblue">{this.state.course.teacher.name} </p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-bookmark inblue icon-mr"></i> Category</h5>
                                <p className="inblue">{this.state.course.category} </p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="fas fa-globe inblue icon-mr"></i> Language</h5>
                                <p className="inblue">{this.state.course.language} </p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="fas fa-spell-check inblue icon-mr"></i> Level of the course</h5>
                                <p className="inblue">{this.state.course.level} </p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="fas fa-tasks inblue icon-mr"></i> Sections</h5>
                                <p className="inblue">{this.state.course.sections.length}</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5 className="inblue icon-mr"><i className="fas fa-award icon-mr"></i> Certificate of completion</h5>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn-outlined" onClick={()=> this.enroll()}>Enroll this course</button>
                                </div>
                            </div>
                        </div>
                            <h3>Course Sections</h3>
                            <div className="single-section">
                                {this.state.sectionsList.map((e, index)=>
                                <div className="row mt-2 mb-2 container">
                                    <div key={index} className="col-xl-4 d-flex align-items-stretch">
                                        
                                        <span className="section-title">
                                            <b className="icon-mr inblue">{index+1}.</b>
                                            {e}
                                        </span>
                                    </div>
                                    <div className="col-xl-4 align-items-stretch">
                                        <div className="mt-3">
                                        <Progress value={50} ></Progress>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <button className="btn-get-started mt-1">
                                            <a href={"/SectionDetails/"+this.state.course._id+"/"+index} className="Linky"> View details</a> 
                                        </button>

                                    </div>
                                </div>
                                )
                                }
                                
                            </div>

                            <h3>Reviews</h3>
                            <div className="single-section">
                                <div>
                                    <span className="user-name margin-lt">
                                        Emilia Clarcke
                                    </span>
                                    <span className="margin-lt">
                                        <StyledRating
                                            value={this.state.getrate}
                                            onChange={(event, x) => {
                                                this.setState({getrate : x});
                                            }}
                                        />
                                    </span>
                                    
                                    <p className="comment">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut sed, dolorum asperiores perspiciatis provident,
                                        odit maxime doloremque aliquam.
                                    </p>
                                </div>
                            </div>

                            <h3>Submit your own review</h3>
                            <div className="single-section">
                                <div className="margin-lt">
                                    <StyledRating
                                        value={this.state.setrate}
                                        onChange={(event, y) => {
                                            this.setState({setrate : y});
                                        }}
                                    />
                                </div>
                                <textarea type="text" className="input-comment" placeholder="Type your comment here ..."/>
                                <br/>
                                <button className="PrimaryButton" >Submit</button>
                            </div>

                    </div>
                </section>


            </div>
        );
    }
}
 
export default CourseDetails;