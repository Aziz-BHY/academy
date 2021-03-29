import React, { Component } from 'react';
class Paragraph extends Component {

    constructor(props) {
        super(props);
        this.state={
            

        }
    }

    render() { 
        return ( 
            <div className="container-fluid mt-3">
                <div className="mb-3">
                    
                    <textarea type="text" className="paragraph" placeholder="Paragraph ..." onChange={
                        (e)=>this.props.ChangeValue(e.target.value, this.props.index)
                        } />
                    
                </div>

            </div>
         );
    }
}
 
export default Paragraph;