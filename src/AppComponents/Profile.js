import React, { Component } from 'react';
import axios from 'axios';
import { Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';

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
    }
    render() { 
        return ( 
            <div>
                <div className="breadcrumbs">
                    <div className="container">
                    
                        <h2>{this.state.user?.name}</h2>
                    </div>
                </div>


			    <div class="profile-image">
                        <img src={this.state.user?.image} className="img-fluid mt-3" alt=""/>

                    </div>
<h2>
                        Works as <span className="inblue">{this.state.user?.post}</span>
                        <br></br> 
                        , At <span className="inblue">{this.state.user?.organisation} </span> 
                    </h2>
            
                <div className="container-fluid mt-5" >
                    <Avatar className="" alt={this.state.user?.name} src={this.state.user?.image}></Avatar>
                    <h1>{this.state.user?.name}</h1>
                    
                    <h3>
                        <span className="" >Intrested by : </span>
                        <ul className="" >
                        {
                            this.state.user?.intrests.map((e,i)=>(
                                <li key={i} >{e.text} </li>

                            )
                            )
                        }
                        </ul>
                        
                    </h3>
                    <h3>Nb of published Courses : {this.state.user?.published.length} </h3>
                    <h2>Published Courses :  </h2>
                    
                </div>
                    <div >

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
                                        <i className="bx bx-star inblue"></i>&nbsp;65
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                            </div> 
                            )
                        }
                    </div>       
                
                
            </div>
         );
    }
}
 
export default Profile;