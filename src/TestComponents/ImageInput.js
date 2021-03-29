import React, { Component } from 'react';
class ImageInput extends Component {

    constructor(props) {
        super(props);
        this.state={
            text: "",

        }
    }

    render() { 
        return ( 
            <div className="container-fluid mt-3">
                <div className="mb-3">
                    
                    <input type="text" className="title3" placeholder="Write Image link" onChange={
                        (e)=>this.props.ChangeValue(e.target.value, this.props.index)
                        } />
                    
                </div>

            </div>
         );
    }
}
 
export default ImageInput;