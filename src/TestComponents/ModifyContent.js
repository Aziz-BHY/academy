import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
	comma: 188,
	enter: 13,
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];

class ModifyContent extends Component {
 
  constructor (props) {
    super(props)
    this.state = { editorHtml: "", 
      MDtext :"",
      filepath :"",

      id : "",
      title : "",
      teacher: "",
      category: "",
      language : "",
      level : "",
      description : "",
      tags : [],

      /*suggestions: [
        {text: 'Web' },
        {text: 'Cloud' },
        {text: 'React' },
        {text: 'Kubernetes'},
        {text: 'GoLang' },
        {text: 'DevOps' }
      ]*/
    }

    
    
  
    this.handleChange = this.handleChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  componentDidMount(){
    axios.get("http://localhost:5000/course/CourseDetail?id="+this.props.match.params.idCourse ).then(
      res => {
        

        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        outputHtml = converter.makeHtml(res.data.fileData);
        
        this.setState({
          
          filepath : res.data.course.path,
          editorHtml : outputHtml,

          id : this.props.match.params.idCourse,
          title : res.data.course.title,
          teacher: res.data.course.teacher,
          category: res.data.course.category ,
          language : res.data.course.language ,
          level : res.data.course.level,
          description : res.data.course.description,
          tags : res.data.course.tags,

        })
        
      }
    )
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }

  saveChanges() {
    var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    outputMD = converter.makeMarkdown(this.state.editorHtml);
    showdown.simpleLineBreaks= true;
    
    const CourseModified = {
      _id : this.state.id,
			title : this.state.title ,
			teacher: this.state.teacher ,
			category: this.state.category ,
			language : this.state.language ,
			level : this.state.level,
			description : this.state.description ,
			tags : this.state.tags
		}
    
    axios.post("http://localhost:5000/course/modifyContent" ,{
      path : this.state.filepath,
      content : outputMD,
      course : CourseModified
    } ).then(
      res=> console.log("course very well modified !!! ")
    )

  }
    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...this.state.tags, tag] }));
		
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }
  
    handleDelete(i) {
      const { tags } = this.state;
      this.setState({
       tags: tags.filter((tag, index) => index !== i),
      });
    }

  handleAddition(tag) {
      this.setState(state => ({ tags: [...this.state.tags, tag] }));
  
    }

  handleDrag(tag, currPos, newPos) {
      const tags = [...this.state.tags];
      const newTags = tags.slice();

      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: newTags });
  }
  
  render () {
    const { tags, suggestions } = this.state;

    return (
      <div className="container-fluid">

        <section className="contact-section">
          <div className="contact-box">
            <form id="contact-form">
              <h1>Modify your course</h1>
                <label >Course title</label>
                <input type="text"  value={this.state.title}
                    onChange={(e)=>{this.setState({title : e.target.value});}}/>

                <div className="row">
                  <div className="col-md-6">
                    <label >Teacher</label>
                    <input  type="text"  value={this.state.teacher}
                    onChange={(e)=>{this.setState({teacher : e.target.value});}}/>
                  </div>

                  <div className="col-md-6">
                    <label>Course Category</label>
                    <input  type="text"  value={this.state.category}
                    onChange={(e)=>{this.setState({category : e.target.value});}}/>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label >Language</label>
                    <input  type="text"  value={this.state.language}
                    onChange={(e)=>{this.setState({language : e.target.value});}} />
                  </div>

                  <div className="col-md-6">
                    <label>Level</label>
                    <input  type="text"  value={this.state.level}
                    onChange={(e)=>{this.setState({level : e.target.value});}} />
                  </div>
                  
                </div>
                <label >Course Description</label>
                <textarea   value={this.state.description}
                    onChange={(e)=>{this.setState({description : e.target.value});}} />

                <label >Course Tags</label>
                <ReactTags tags={tags}
                  value={this.state.tags}
                  //suggestions={suggestions}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                  handleDrag={this.handleDrag}
                  delimiters={delimiters} 
                />
                
              </form>
          </div>

    
        </section >

        <ReactQuill 
          theme={"snow"}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={ModifyContent.modules}
          formats={ModifyContent.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
          
        <button className="btn btn-outline-success mt-4 mb-4" onClick={this.saveChanges} >Save Changes</button>
        
      </div>
    )
  }
}


ModifyContent.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, ],
    ['bold', 'italic', 'underline', 'strike'],       
    ['blockquote', 'code-block'], 
    [{'list': 'ordered'}, {'list': 'bullet'},{'indent': '-1'}, {'indent': '+1'}], 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    
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
ModifyContent.formats = [
  'header', 'font', 'size',
  'code', 'align' , 'code-block',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list',  'bullet' ,'indent',
  'link', 'image', 'video'
]


export default ModifyContent ;