import React, { Component } from 'react';
import Section from './Section';
import axios from 'axios';

class AddSection extends Component {
    constructor(props){
        super(props)
        this.state={
            sections:[],
            title : this.props.title ,
            teacher : this.props.teacher 
        }

        this.addNewSection = this.addNewSection.bind(this)
        this.ChangeContent = this.ChangeContent.bind(this)
        this.ChangeTitle = this.ChangeTitle.bind(this)
        this.SaveText = this.SaveText.bind(this)
    }
    addNewSection(){
        this.setState({
            sections: [...this.state.sections, {title: "", 
            content:`<h1> This is a new section </h1>
            <p> Add the content ... </p>` }]
        })
    }
    ChangeTitle (valeur, index ){
        let variable = this.state.sections;
        
        variable[index].title = valeur ;
        
        this.setState({
            sections: variable
        })
        
    }
    ChangeContent (valeur, index){
        
        let variable = this.state.sections;
        variable[index].content = valeur ;
        
        this.setState({
            sections: variable
        })
        console.log(this.state.sections);

    }
    SaveText(){
        
        var showdown  = require('showdown'),
            converter = new showdown.Converter();

            this.state.sections.map((e, index)=> {
                e.content = converter.makeMarkdown(e.content)
            })
            console.log(this.state.sections)
            
            
            axios.post("http://localhost:5000/course/addSections", {
                sections: this.state.sections ,
                title : this.state.title,
                teacher : this.state.teacher
            }).then(res=>{
                console.log("Course content well added !! !")
            })
            
    }
   
    render() { 
        return ( 
            <div className="container-sm top-space mb-4">
                <h2 className="mt-4 mb-4"> Now fill course sections</h2>
                <button className="btn-outlined-sm mb-4" onClick={this.addNewSection} >Add a section </button>
                <br/>
                {this.state.sections.map((c, index)=>
                    <div key={index} className="mb-5">
                        <h5>Section {index+1} </h5>
                        <Section key={index} ChangeTitle={this.ChangeTitle} ChangeContent={this.ChangeContent} Contenu={c.content} index={index} /> 
                        <i className="far fa-trash-alt red-icon"/>
                        
                    </div>
                )} 
                 
                <button className="PrimaryButton mt-3 mb-4" onClick={this.SaveText} >Submit</button>
                <br/>
            </div>
         );
    }
}
 
export default AddSection;