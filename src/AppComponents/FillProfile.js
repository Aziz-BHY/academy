import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

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
            ]
		}
		this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        
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
                            <input type="text"  placeholder="Name" required/>
                            <input type="number"  placeholder="Phone number" required/>
                            <ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={this.handleDelete}
									handleAddition={this.handleAddition}
                                    handleDrag={this.handleDrag}
									placeholder="Intrests"
                                    autofocus={false}
							delimiters={delimiters} />

                            <input type="text"  placeholder="Organisation" />
                            <input type="text"  placeholder="Post" />
                            
                            
                            <div className="text-center"><button type="submit">Submit</button></div>
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