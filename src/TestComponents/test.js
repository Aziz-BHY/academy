import React, { Component } from 'react';
import text from "./testing.md";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            MDtext: ""
        }
        
    }    

    
    ReadMD (){
            fetch(text)
            .then((r) => r.text())
            .then(text  => {
                console.log(text)
              this.setState({MDtext: text})
            })  
        
        
    }

    HtmlConverter (){
        
        console.log(this.state.MDtext)
        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        outputHtml = converter.makeHtml(this.state.MDtext);
        console.log(outputHtml)
        return { __html: outputHtml };
    }
    render() { 
        if(this.state.text == "") 
            return (<p></p>)
        else

        return ( 
        <div> 
            <div dangerouslySetInnerHTML={this.HtmlConverter()} >
            
            </div>

        </div>

        
        
        
        );
    }
}
 
export default Test;