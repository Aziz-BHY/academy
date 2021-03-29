import React, { Component } from 'react';
class ForTesting extends Component {
    
    render() { 
        return ( 
            <div>
                <button onClick={this.props.clicked}  className="btn btn-success">Next <i class="fa fa-arrow-right ml-3"></i></button>

            </div>
         );
    }
}
 
export default ForTesting;
