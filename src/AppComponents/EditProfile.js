import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';

const KeyCodes = {
	comma: 188,
	enter: 13,
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];
class EditProfile extends Component {
    constructor(props){
		super(props)
		this.state = {
			tags : [],
			suggestions: [
                {text: 'Web' },
                {text: 'Cloud' },
                {text: 'React' },
                {text: 'Kubernetes' },
                {text: 'GoLang' },
                {text: 'DevOps' }
            ],
            test:"hey",
            user : JSON.parse(localStorage.getItem('profile')),
            name:"", organisation:"", post:""
		}
		this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

	}
    componentDidMount(){
        axios.post("http://localhost:5000/user/getProfile", {
                email : this.state.user?.result.email,
                
            }).then(res=>{
                this.setState({
                    name : res.data.name, 
                    tags:res.data.intrests,
                    organisation : res.data.organisation,
                    post : res.data.post
                })
                
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
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }
    handleSubmit(e){
        let updatedProfile ={
            name : this.state.name ,
            organisation : this.state.organisation,
            intrests : this.state.tags,
            post : this.state.post
        }
        e.preventDefault();
        axios.post("http://localhost:5000/user/updateProfile", {
                email : this.state.user?.result.email,
                profile : updatedProfile
                
            }).then(res=>{
                console.log("very well updated  ♥♥ ")
                
            })
    }
    
    render() { 
        const { tags, suggestions } = this.state;
        return ( 
            <div>   
                        <form className="form-style">
                            <input type="email"  placeholder="Email" 
                                value={this.state.user?.result.email} disabled/>
                            <input type="text"  placeholder="Name" 
                                value={this.state.name} 
                                onChange={(e)=> this.setState({name :e.target.value}) }
                                required
                            />
                            <ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={this.handleDelete}
									handleAddition={this.handleAddition}
                                    handleDrag={this.handleDrag}
									placeholder="Intrests"
                                    autofocus={false}
							delimiters={delimiters} />

                            <input type="text"  placeholder="Organisation" 
                                value={this.state.organisation}
                                onChange={(e)=> this.setState({organisation :e.target.value}) }
                            />
                            <input type="text"  placeholder="Post" 
                                value={this.state.post}
                                onChange={(e)=> this.setState({post :e.target.value}) }
                            />
                            
                            
                            <div className="text-center"><button type="submit"  onClick={this.handleSubmit }>Submit</button></div>
                        </form>
            </div>
         );
    }
}
 
export default EditProfile;