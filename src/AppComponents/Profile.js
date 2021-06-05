import React, { Component } from 'react';
import axios from 'axios';
import { Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './SpecialCss/Profile.css';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            user : { intrests:[], published:[]},
            email : this.props.match.params.UserEmail,
            HisCourses : []
        }
    }
    componentDidMount(){
        axios.post("http://localhost:5000/user/getProfile", 
        {email: this.state.email })
        .then(res=>{
            this.setState({ user: res.data  })
            //console.log(this.state.user?.intrests)
            
        })
        axios.post("http://localhost:5000/course/publishedCourses", 
            {email :this.state.email})
            .then(res =>{ 
                this.setState({HisCourses : res.data} )
                console.log(this.state.HisCourses)
            }
            
        )
        this.coursesStars.bind(this) 
    }
    coursesStars(){
        var NbStars = 0;
        this.state.HisCourses.forEach(e=>{
            console.log(e)
            NbStars = NbStars + e?.stars ;
        })
        var result = NbStars/this.state.HisCourses.length
    }
    render() { 
        return ( 
            <div>
               <div className="top" />
                <div className="page-content page-container top" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25"> <img src={this.state.user?.image} className="img-radius" alt="User-Profile-Image"/> </div>
                                                <h6 className="f-w-600">{this.state.user?.name}</h6>
                                                <p>Works as a {this.state.user?.post} at {this.state.user?.organisation}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Email</h6>
                                                <div className="row">
                                                        <h6 className="text-muted f-w-400">{this.state.user?.email}</h6>
                                                </div>
                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Intrests</h6>
                                                <div className="row">
                                                    {
                                                        this.state.user?.intrests.map((e,i)=>(
                                                            <h6 className="text-muted f-w-400">{e.text}</h6>
                                                        )
                                                        )
                                                    }
                                                </div>
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Published Courses</h6>
                                                <div className="row">
                                                        <h6 className="text-muted f-w-400">{this.state.user?.published.length}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid courses col-lg-9 mt-5 mt-lg-0">

                    <h2>Explore <span className='inblue'> {this.state.user?.name}</span>'s courses</h2>

                    <div className="row mt-4 mb-4" data-aos-delay="100">

                        {
                            this.state.HisCourses.map((elem,index)=> 
                            
                            
                            <div key={index} className="col-lg-5 col-md-6 d-flex align-items-stretch">
                                
                                    <div  className="course-item mb-3">
                                        <img src={elem.image} className="img-fluid img-course" alt="..."/>
                                        <div className="course-content">


                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>{elem.category} </h4>
                                            <p className="price">{elem.price} TND</p>
                                            </div>

                                            <h3><Link to={"/CourseDetails/" +elem._id} >{elem.title} </Link></h3>
                                            <p>{elem.level} </p>
                                            <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt=""/>
                                                <span>{elem.teacher.name} </span>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bx bx-user inblue"></i>&nbsp;{elem.student}
                                                &nbsp;&nbsp;
                                                <i className="bx bx-star inblue"></i>&nbsp;{(elem.stars!=null)?(elem.stars / elem.student):0}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div> 
                            )
                        }
                    </div>
                
                </div>
            </div>
         );
    }
}
 
export default Profile;