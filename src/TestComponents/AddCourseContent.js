import React, { Component } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class AddCourseContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            title : this.props.title ,
            teacher : this.props.teacher ,
            path : 'AcademyFiles/'+this.props.teacher+'/'+this.props.title+'/course.md' ,
            
            editorHtml: `
                <h1>This is a new section</h1>
                <p>Add a new section content .. </p>
            `
        
        }
        
        this.SaveText = this.SaveText.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
        this.setState({ editorHtml: html });
    }

    SaveText(){
        
        var showdown  = require('showdown'),
            converter = new showdown.Converter(),
            outputMD = converter.makeMarkdown(this.state.editorHtml);
            showdown.simpleLineBreaks= true;
            
            axios.post("http://localhost:5000/course/addContent", {
                path: this.state.path ,
                content: outputMD,
                title : this.state.title,
                teacher : this.state.teacher
            }).then(res=>{
                console.log("Course content well added !! !")
            })
            
    }
   
    
    render() { 
        return ( 
            <div className="container-fluid mt-3">
                
                <ReactQuill 
                    theme={"snow"}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={AddCourseContent.modules}
                    formats={AddCourseContent.formats}
                    bounds={'.editor'}
                    
                />

                <button className="btn btn-info mt-5" onClick={this.SaveText} >Save</button>

                
            </div>
         );
    }
}

AddCourseContent.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, ],
      ['bold'],       
      ['blockquote', 'code-block'], 
      [{'list': 'ordered'}, {'list': 'bullet'}], 
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
      
      ['link', 'video'],
      
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
AddCourseContent.formats = [
    'header', 'font', 'size',
    'code-block',
    'bold',  'blockquote',
    'list',  'bullet' ,
    'link', 'video'
]
  
export default AddCourseContent;