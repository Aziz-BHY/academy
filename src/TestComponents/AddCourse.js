import axios from 'axios';
import React, { Component } from 'react';
import Tags from './Tags.component';
import { WithContext as ReactTags } from 'react-tag-input';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';


const KeyCodes = {
	comma: 188,
	enter: 13,
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];


class AddCourse extends Component {
	constructor(props){
		super(props)
		this.state = {
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
                {text: 'Kubernetes' },
                {text: 'GoLang' },
                {text: 'DevOps' }
            ]*/
		}
		this.handleClick = this.handleClick.bind(this);

		this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        
	}

	handleClick (event) {
		event.preventDefault();

		const newCourse = {
			title : this.state.title ,
			teacher: this.state.teacher ,
			category: this.state.category ,
			language : this.state.language ,
			level : this.state.level,
			description : this.state.description ,
			tags : this.state.tags
		}

		axios.post('http://localhost:5000/course/add', newCourse).then(res=>{
			if (res.data == "yes") console.log("course created YESSS !!!!!!")
		})
		
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

    


    render() { 
		const { tags, suggestions } = this.state;

        return ( 
            <div className="container">

				<section className="contact-section">
				
				
				
					<div className="contact-box">
						<form id="contact-form">
							<h1>Add a course  !</h1>
								<label >Course title</label>
								<input type="text"  
										onChange={(e)=>{this.setState({title : e.target.value});}}/>

								<div className="row">
									<div className="col-md-6">
										<label >Teacher</label>
										<input  type="text"
										onChange={(e)=>{this.setState({teacher : e.target.value});}}/>
									</div>

									<div className="col-md-6">
										<label>Course Category</label>
										<input  type="text" 
										onChange={(e)=>{this.setState({category : e.target.value});}}/>
									</div>

								</div>
								<div className="row">
									<div className="col-md-6">
										<label >Language</label>
										<input  type="text"
										onChange={(e)=>{this.setState({language : e.target.value});}} />
									</div>

									<div className="col-md-6">
										<label>Level</label>
										<input  type="text" 
										onChange={(e)=>{this.setState({level : e.target.value});}} />
									</div>
									
								</div>
								<label >Course Description</label>
								<textarea  
										onChange={(e)=>{this.setState({description : e.target.value});}} />

								<label >Course Tags</label>
								<ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={this.handleDelete}
									handleAddition={this.handleAddition}
									
									delimiters={delimiters} />
								
								
								<button onClick={(e)=>{this.props.changeFatherStates(false,this.state.teacher,this.state.title); this.handleClick(e)}}  className="mt-4">
									
										Next <i className="fa fa-arrow-right ml-3"></i>
									
								</button>


								
							</form>
					</div>

		
				</section >
				
							
			</div>
         );
    }
}
 
export default AddCourse;

