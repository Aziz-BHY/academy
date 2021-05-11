import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';

const KeyCodes = {
	comma: 188,
	enter: 13,
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];
class FillProfile extends Component {
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

            user : JSON.parse(localStorage.getItem('profile')),
            organisation :"",
            post :"",
            name :JSON.parse(localStorage.getItem('profile'))?.result.name
		}
		this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        e.preventDefault();
        axios.post("http://localhost:5000/user/fillProfile", {
                email : this.state.user?.result.email,
                organisation :this.state.organisation ,
                intrests : this.state.tags,
                post : this.state.post,
                name: this.state.name
            }).then(res=>{
                console.log("Profile is filled ;)")
            })
    }
    render() { 
        const { tags, suggestions } = this.state;
        return ( 
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Fill your profile</h2>
                    </div>
                </div>

                <section>
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="assets/img/fill_form2.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <form className="form-style">
                            <input type="email"  placeholder="Email" value={this.state.user?.result.email} disabled/>
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
                                onChange={(e)=> this.setState({organisation :e.target.value}) }
                            />
                            <input type="text"  placeholder="Post" 
                                onChange={(e)=> this.setState({post :e.target.value}) }
                            />
                            
                            
                            <div className="text-center"><button type="submit"  onClick={this.handleSubmit }>Submit</button></div>
                        </form>
                            

                        </div>
                        </div>

                    </div>
                </section>
            </div>
         );
    }
}
 
export default FillProfile;