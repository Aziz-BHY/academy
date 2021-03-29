import React, { Component } from 'react';
class Title1 extends Component {

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
                    <button className="btn btn-danger mr-2 mb-4" onClick={
                        ()=>this.props.DeleteBox(this.props.index)
                        }>X</button>
                    <input type="text" className="title1" placeholder="Title 1" onChange={
                        (e)=>this.props.ChangeValue(e.target.value, this.props.index)
                        } />
                    
                </div>

            </div>
         );
    }
}
 
export default Title1;