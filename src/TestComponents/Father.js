import React, { Component } from 'react';
import Title1 from './Title1';
import Title2 from './Title2';
import Ainput from './Ainput'
import axios from 'axios';
import Paragraph from './Paragraph'
import ImageInput from './ImageInput'

class Father extends Component {
    constructor(props){
        super(props);
        this.state = {
            components: [],
            outputMDText : "",
            MDtext :"",
            outputHTML: ""
        }
        this.AjouterH1 = this.AjouterH1.bind(this);
        this.AjouterH2 = this.AjouterH2.bind(this);
        this.AjouterA = this.AjouterA.bind(this);
        this.AjouterParagraph = this.AjouterParagraph.bind(this);
        this.AjouterImage = this.AjouterImage.bind(this);


        this.SaveText = this.SaveText.bind(this);
        this.ShowText = this.ShowText.bind(this);
        this.ChangeValue = this.ChangeValue.bind(this);
        this.ChangeTo = this.ChangeTo.bind(this);
        this.DeleteBox= this.DeleteBox.bind(this);

        axios.get("http://localhost:5000/").then(res=> console.log(res.data))

}
    AjouterH1(){
        this.setState({
            components: [...this.state.components, {type: "h1", valeur: ""}]
        })
    }
    AjouterH2(){
        this.setState({
            components: [...this.state.components, {type: "h2", valeur: ""}]
        })
    }

    AjouterParagraph(){
        this.setState({
            components: [...this.state.components, {type: "p", valeur: ""}]
        })

    }
    AjouterA(){
        this.setState({
            components: [...this.state.components, {type: "a", valeur: "", to:""}]
        })
    }
    AjouterImage(){
        this.setState({
            components: [...this.state.components, {type: "img", valeur: ""}]
        })
    }

    ChangeValue (valeur, index ){
        let variable = this.state.components;
        
        variable[index].valeur = valeur ;
        
        this.setState({
            components: variable
        })
        console.log(this.state.components);
    }
    ChangeTo (to, index){
        console.log(to)
        let variable = this.state.components;
        variable[index].to = to ;
        
        
        this.setState({
            components: variable
        })
    }
    DeleteBox (index){
        var variable = this.state.components;
        variable.splice(index, 1)
        console.log(variable)
        this.setState({
            components : [...variable]
        })

    }
    SaveText(){
        
        let result="";
        for(let i of this.state.components){
            if (i.type == "h1"){
                result+="<h1>"+i.valeur+"</h1>  &nbsp;"
            }
            else if (i.type == "h2"){
                result+="<h2>"+i.valeur+"</h2>  &nbsp;"
            }
            else if (i.type =="a"){
                 
                result += "<a href = \'" +i.to+"\'>"+i.valeur+"</a> &nbsp; <br/>"
            }
            else if (i.type =="p"){
                result+="<p>"+i.valeur+"</p>  &nbsp;"
            }
            else if (i.type == "img"){
                result+="<img src=\'"+i.valeur+"\' alt='' /> &nbsp; <br/>"
            }
        }
        var showdown  = require('showdown'),
            converter = new showdown.Converter(),
            outputMD = converter.makeMarkdown(result);
            showdown.simpleLineBreaks= true;
            this.setState({outputMDText: outputMD})

            axios.post("http://localhost:5000/", {
                path: 'filesMD',
                file: 'chap.md',
                content: outputMD
            }).then(res=>{
                console.log("file created !")
            })
            
    }
   
    ShowText(){
        /*axios.get("http://localhost:5000/").then(
            res=> {console.log(res.data)
            this.setState({
                MDtext: res.data
            })
        });*/
        
        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        outputHtml = converter.makeHtml(this.state.outputMDText);
        console.log(outputHtml)
        this.setState({
            outputHTML : outputHtml
        })
    }

    render() { 
        return ( 
            <div className="container-fluid mt-3">
                
                        <button className="btn btn-info mr-5" onClick={this.SaveText} >Save Text</button>
                        <button className="btn btn-info mr-5" onClick={this.ShowText} >Show Text</button>
                    
                    
                    
                        <nav className="menu">
                            <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
                            <label className="menu-open-button" htmlFor="menu-open">
                                <span className="lines line-1"></span>
                                <span className="lines line-2"></span>
                                <span className="lines line-3"></span>
                            </label>

                            <a  href="#" onClick={this.AjouterH1} className="menu-item lightblue texting"> H1 </a>
                            <a  href="#" onClick={this.AjouterH2} className="menu-item lightblue texting">H2 </a>
                            <a  href="#" className="menu-item lightblue"> <i className="fa fa-code"></i> </a>
                            <a  href="#" onClick={this.AjouterParagraph} className="menu-item lightblue texting"> P </a>
                            <a  href="#" onClick={this.AjouterA} className="menu-item lightblue texting"> <i className="fa fa-link"></i> </a>
                            <a  href="#" onClick={this.AjouterImage} className="menu-item lightblue texting"> <i className="fa fa-image"> </i> </a>
                        </nav>
                    
                {this.state.components.map((c, index)=>{
                    if(c.type == "h1") return <Title1 key={index} DeleteBox={this.DeleteBox} ChangeValue={this.ChangeValue} index={index} /> 
                    else if(c.type == "h2") return <Title2 key={index} DeleteBox={this.DeleteBox} ChangeValue={this.ChangeValue} index={index} />
                    else if(c.type == "a") return <Ainput key={index} DeleteBox={this.DeleteBox} ChangeValue={this.ChangeValue} ChangeTo={this.ChangeTo} index={index}/>
                    else if (c.type =="p") return <Paragraph key={index} DeleteBox={this.DeleteBox} ChangeValue={this.ChangeValue} index={index} />
                    else if (c.type =="img") return <ImageInput key={index} ChangeValue={this.ChangeValue} index={index} />}
                )}
                
                

                <div className="mt-4" dangerouslySetInnerHTML={{__html: this.state.outputHTML}} />
                
            </div>
         );
    }
}
 
export default Father;