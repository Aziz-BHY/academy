import React, { Component } from 'react';
import axios from 'axios';

class ShowCourseContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            MDtext :"",
            outputHTML: ""
        }
        this.ShowText = this.ShowText.bind(this);

    }

    ShowText(){
        axios.get("http://localhost:5000/").then(
            res=> {
            this.setState({
                MDtext: res.data
            })
        });
        
        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        outputHtml = converter.makeHtml(this.state.MDtext);
        console.log(outputHtml)
        this.setState({
            outputHTML : outputHtml
        })
    }
    render() { 
        return ( 
            <div className="container-fluid " >
                <button className="btn btn-info mr-5" onClick={this.ShowText} >Show Text</button>
                <div className="mt-4" dangerouslySetInnerHTML={{__html: this.state.outputHTML}} />

            </div>
         );
    }
}
 
export default ShowCourseContent;