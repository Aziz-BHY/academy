import React, { Component } from 'react';
import Progress from './Progress'
import {Link} from 'react-router-dom';
import axios from 'axios';

import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import './SpecialCss/style.css';

const user = JSON.parse(localStorage.getItem('profile'));
const StyledRating = withStyles({
    iconFilled: {
      color: '#4ab6dd',
    },
    iconHover: {
      color: '#1692bf',
    },
  })(Rating);
  const SimpleRating = withStyles({
    iconFilled: {
      color: '#4ab6dd',
    },
    
  })(Rating); 

class ViewPublishedCourse extends Component {
    
    constructor(props){
        super(props);
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            course : {sections:[], teacher:{name:"",email:""}},
            sectionsList : [],
            setrate:0,
            enrolled :"",
            currentDate: date,
            reviewContent:"",
            progress : -1,
            comments : [],
        }
        //this.setImage =this.setImage.bind(this)
        this.enroll =this.enroll.bind(this)
        this.returnEnrollButton = this.returnEnrollButton.bind(this)
        this.submitReview = this.submitReview.bind(this)
        this.getComments = this.getComments.bind(this)
        this.returnProgress = this.returnProgress.bind(this)
    }
    deleteCourse(id){
        
        axios.post("http://localhost:5000/course/deleteCourse" , {id : id}).then
        (res => console.log("ok"))
    }
    componentDidMount(){
            
        axios.get("http://localhost:5000/course/CourseDetail?id="+this.props.match.params.idCourse ).then(
            res => {
                console.log(res.data.course)
                this.setState({
                course : res.data.course,
                sectionsList : res.data.course.sections
                })
                this.getComments();
            }
        )
         
        axios.post("http://localhost:5000/user/verifyEnrolled",{
            id : this.props.match.params.idCourse,
            email :user?.result.email
        }).then(res =>{
            if (res.data.enrolled =="yes") this.setState({enrolled : "yes", progress:res.data.progress})
            if (res.data.enrolled == "no") this.setState({enrolled : "no"})
        })
    }
    returnEnrollButton(){
        //console.log(this.state.enrolled)
        if (this.state.enrolled =="no")
        return (<div className="d-flex justify-content-between align-items-center">
        <button className="btn-outlined" onClick={()=> this.enroll()}>Enroll this course</button>
        </div>)
        
        
    }
    
    enroll(){
        console.log( "email :  "+user?.result.email  +" -- id:  "+this.props.match.params.idCourse)
        axios.post("http://localhost:5000/user/addEnrolled", {
            email :user?.result.email  ,
            id:this.props.match.params.idCourse
        }).then(res=>{
            if (res.data == "yes") {
                console.log("Enrolled with success ;)" )
                window.location.reload()
            }
        })   
         
    }
    getComments(){
        
        axios.post("http://localhost:5000/comment/get", {
            id : this.state.course._id,

        }).then(res=>{
            this.setState({ comments:res.data  });
            console.log(this.state.comments)
        })  
    }
    submitReview(){
        axios.post("http://localhost:5000/comment/add", {
            date : this.state.currentDate,
            id : this.state.course._id,
            stars : this.state.setrate,
            content : this.state.reviewContent,
            email : user?.result.email ,

        }).then(res=>{
            if (res.data == "yes") {
                console.log("Review added with success ;)" )
                this.getComments()
            }
        })  
    }
    returnProgress(i){
        var result = 4
        console.log("prog -->" +this.state.progress)
        for (let index = 0; index <= this.state.progress; index++) {
            if (index ==i) {
                result = 100;
                break;
            }
        }
        return result;
    }
    render() { 
        return ( 
            <div>
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>{this.state.course.title}</h2>
                    </div>
                </div>
                <div className="container-sm mt-5" >
                    <button className="edit-button" >
                        <Link to={"/EditPublishedCourse/"+this.state.course._id} className="Linky"> <i className="far fa-edit"/> Edit this course </Link>
                    </button>
                    <button className="delete-button" onClick={()=>this.deleteCourse(this.state.course._id)} >
                        <i className="far fa-trash-alt"/> Delete this course
                    </button>
                </div>
                <section id="course-details" className="course-details">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-8">
                                <img src={this.state.course.image} className="img-fluid" alt=""/>
                                <h3 className="mb-3" >What i'm gonna learn</h3>
                                <p>
                                    {this.state.course.description}
                                </p>

                            </div>
                            <div className="col-lg-4">

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5><i className="far fa-money-bill-alt inblue icon-mr"></i> Course fee</h5>
                                <p className="inblue">{this.state.course.price} </p>
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
                                <p className="inblue">4</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                <h5 className="inblue icon-mr"><i className="fas fa-award icon-mr"></i> Certificate of completion</h5>
                                </div>

                                
                            </div>
                        </div>
                        <h3>Course Sections</h3>
                            <div className="single-section">
                                {this.state.sectionsList.map((e, index)=>
                                <div className="row mt-2 mb-2 container" key={index}>
                                    <div  className="col-xl-4 d-flex align-items-stretch">
                                        
                                        <span className="section-title">
                                            <b className="icon-mr inblue">{index+1}.</b>
                                            {e}
                                        </span>
                                    </div>
                                    {
                                        
                                        <>
                                            
                                            <div className="col-xl-4 d-flex align-items-stretch">
                                            <a href={"/SectionDetails/"+this.state.course._id+"/"+index} className="Linky">
                                                <button className="btn-get-started mt-1" >
                                                    View details
                                                </button>
                                            </a> 
                                            </div>
                                        </>
                                        
                                    
                                    }
                                    
                                </div>
                                )
                                }
                                
                            </div>

                            <h3>Reviews</h3>
                            <div className="single-section">
                                {   
                                    this.state.comments.map((c,i)=>   <div>
                                            <span className="user-name margin-lt">
                                                {c.EmailUser}
                                            </span>
                                            <span className="margin-lt">
                                                <SimpleRating value={c.stars}  />
                                            </span>
                                            
                                            <p className="comment">
                                                {c.comment.map((e,i)=>
                                                    <span>
                                                    <h5>{e.content}</h5> 
                                                    <p>{e.date}</p>
                                                    </span>
                                                )}
                                                
                                            </p>
                                            <hr/>
                                            
                                        </div>
                                    )
                                    
                                
                                }
                                
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
                                <textarea 
                                    type="text" 
                                    className="input-comment" 
                                    placeholder="Type your comment here ..."
                                    onChange={(e)=>{this.setState({ reviewContent: e.target.value });}}
                                />
                                <br/>
                                <button className="PrimaryButton" onClick={this.submitReview} >Submit</button>
                            </div>

                        </div>
                </section>

            </div> 
        );
    }
}
 
export default ViewPublishedCourse;