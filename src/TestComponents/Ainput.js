import React, { Component } from 'react';

class Ainput extends Component {

    constructor(props) {
        super(props);
        this.state={
            Atext: "",

        }
    }

    render() { 
        return ( 
            <div className="container-fluid mt-3">
                <div className="mb-3 row align-items-start">
                    <div className="col">
                        <input type="text" className="Alink" placeholder="Link to : " onChange={
                            (e)=>this.props.ChangeTo(e.target.value, this.props.index)
                        } />
                    </div>
                    <div className="col">
                        <input type="text" className="Alink" placeholder="Value ..." onChange={
                            (e)=>this.props.ChangeValue(e.target.value, this.props.index)
                        } />
                    </div>
                </div>
                 

            </div>
         );
    }
}
 
export default Ainput;