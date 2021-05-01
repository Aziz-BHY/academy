import React, { Component } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
            editorHtml: `
            <h1>This is a new section</h1>
            <p>Add a new section content .. </p> `
        }
        console.log(this.props)
    }
    
    render() { 
        return ( 
            <div className="container-fluid mt-3 mb-3">
                <input type="text" className="form-label mb-2" placeholder="Section Title"
                onChange={
                    (e)=>this.props.ChangeTitle(e.target.value, this.props.index)}
                />

                <ReactQuill 
                    theme={"snow"}
                    onChange={
                        (e)=>this.props.ChangeContent(e, this.props.index)}
                    value={this.props.Contenu}
                    modules={Section.modules}
                    formats={Section.formats}
                    bounds={'.editor'}
                    
                />

            </div>
         );
    }
}
Section.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}],
      ['bold'],       
      ['code-block'], 
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
Section.formats = [
    'header', 'font', 'size',
    'code-block',
    'bold',  
    'list',  'bullet' ,
    'link', 'video'
]
export default Section;