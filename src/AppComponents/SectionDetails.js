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
            title:""
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
        axios.get("http://localhost:5000/course/SectionDetails?id="+this.props.match.params.idCourse ).then(
            res => {
                console.log(res.data.sections)
                this.setState({
                title : res.data.title,
                section : res.data.sections,
                
            })
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
    }
}
 
export default SectionDetails;