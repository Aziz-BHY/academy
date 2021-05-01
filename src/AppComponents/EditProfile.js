import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
	comma: 188,
	enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

class EditProfile extends Component {
    constructor(props){
		super(props)
		this.state = {
			tags : [
                {text: 'Web' },
                {text: 'Cloud' }
            ],

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
                <form className="form-style">
                            <input type="text"  placeholder="Name" value="EXAMPLE" required/>
                            <input type="number"  placeholder="Phone number" value="55555555" required/>
                            <ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={this.handleDelete}
									handleAddition={this.handleAddition}
                                    handleDrag={this.handleDrag}
									placeholder="Intrests"
                                    autofocus={false}
							delimiters={delimiters} />

                            <input type="text"  placeholder="Organisation" value="EXAMPLE" />
                            <input type="text"  placeholder="Post" value="EXAMPLE" />
                            
                            
                            <div className="text-center"><button type="submit">Submit</button></div>
                </form>
            </div>
        );
    }
}
 
export default EditProfile;