import React, { Component } from 'react';

import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import {Link} from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('profile'))
class SectionDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            section : [],
            index: this.props.match.params.index *1,
            title:"",
            load: false
        }
    }
    previousButtons(){
        if (this.state.index !=0 )
            return <div className="text-left col">
                        <button className="PrimaryButton"> 
                            <a href={"/SectionDetails/"+this.props.match.params.idCourse+"/"+(this.state.index-1)} className="Linky">

                                <i class="fas fa-caret-left"/> Previous
                            </a>
                        </button>
                    </div>
    }
    nextButton(){
        if (this.state.index != this.state.section.length-1)
            return  <div className="text-right col" onClick={this.makeProgress.bind(this)}>
                        <button className="PrimaryButton">
                            <a href={"/SectionDetails/"+this.props.match.params.idCourse+"/"+(this.state.index+1)} className="Linky">
                                Next <i class="fas fa-caret-right"/>
                            </a > 
                        </button>
                    </div> 
    }
    finishButton(){
        if (this.state.index == this.state.section.length-1)
            return  <div className="text-right col" onClick={this.makeProgress.bind(this)}>
                        <button className="PrimaryButton">
                            <a href={"/CourseDetails/" +this.props.match.params.idCourse}  className="Linky">
                                Finish <i class="fas fa-caret-right"/>
                            </a > 
                        </button>
                    </div> 
    }
    componentDidMount(){
        axios.get("http://localhost:5000/course/SectionDetails?id="+this.props.match.params.idCourse +"&user="+localStorage.getItem("profile")).then(
            res => {
                if(res.data.error){
                    console.log(res.data.error)
                }else{
                    this.setState({
                        title : res.data.title,
                        section : res.data.sections,
                        load: true
                    })
                }
               
            }
        )
    }
    makeProgress(){
        axios.post("http://localhost:5000/user/makeProgress", {
            email : user?.result.email ,
            idCourse : this.props.match.params.idCourse,
            indice: this.state.index
        }).then(res=>console.log(res.data))

    }
    render() { 
        if(this.state.load)
        return ( 
            <div>
                {this.state.section.map((e,i)=>
                    {
                        if (i==this.state.index)
                        {
                                    
                        return (
                            <div>
                                <div className="breadcrumbs">
                                    <div className="container">
                                        <h2>
                                            <a href={"/CourseDetails/" +this.props.match.params.idCourse} className="Linky">
                                            {this.state.title}
                                            </a>
                                        </h2>
                                        <p>Section {this.state.index+1} : {e.title} </p>
                                    </div>
                                </div>
                                <div className="container-sm mt-4 mb-4 section-details">
                                    <Markdown>{e.content}</Markdown>  <br></br>
                                </div>
                            </div>
                        )}
                    }
                )}
                <div class="row container-sm mb-4">
                   
                    {this.previousButtons()}
                    {this.nextButton()}
                    {this.finishButton()}

                </div>
            </div>
        );
        return (<div>You don't have the right to access this course</div>)
    }
}
 
export default SectionDetails;