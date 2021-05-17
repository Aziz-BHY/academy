import React, { Component } from 'react';
import axios from 'axios';
import { Avatar} from '@material-ui/core';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            user : { intrests:[]}
        }
    }
    componentDidMount(){
        axios.post("http://localhost:5000/user/getProfile", 
        {email: "ounihadhami@gmail.com"})
        .then(res=>{
            this.setState({ user: res.data  })
            console.log(this.state.user?.intrests)
            
        })
    }
    render() { 
        return ( 
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Fill your profile</h2>
                    </div>
                </div>
                <div className="container-fluid mt-5" >
                    <Avatar className="" alt={this.state.user?.name} src={this.state.user?.image}></Avatar>
                    <h1>{this.state.user?.name}</h1>
                    <h2>
                        Works as <span className="inblue">{this.state.user?.post}</span> 
                        , At <span className="inblue">{this.state.user?.organisation} </span> 
                    </h2>
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
                    <h3>Courses : 3</h3>
                    <h2>Show the courses ;) </h2>
                </div>
            </div>
         );
    }
}
 
export default Profile;