import React, { Component } from 'react';
import text from './testing.txt';

class HtmlToMD extends Component {
    constructor(props) {
        super(props);
        this.state={
            htmlText: "",
            outputMDText : ""

        }
        this.MDConverter = this.MDConverter.bind(this)
    }
    

    
    MDConverter (){
        //var htmlText = `<p>And <strong>bold</strong>, </p>`;
        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        outputMD = converter.makeMarkdown("<h1>"+this.state.htmlText+"</h1>");
        this.setState({outputMDText: outputMD})
    }

    
    render() { 
        return ( 
            <div class="container-fluid mt-3">
                <div class="mb-3">
                    <label className="form-label">Write plain text here </label>
                    <input type="text" className="form-control mb-4" 
                    onChange={(e)=>{this.setState({htmlText : e.target.value});}} />
                    
                    <p className="mt-6">{this.state.htmlText} </p>

                    <button type="button" class="btn btn-success mt-2" 
                    onClick={this.MDConverter}>Convert</button>

                </div>
                
                <div>
                    <h2>This is text to MB</h2>
                    <p>{this.state.outputMDText }</p>
                </div>

            </div>
         );
    }
}
 
export default HtmlToMD;