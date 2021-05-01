import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { WithContext as ReactTags } from 'react-tag-input';
import Section from './Section';

const KeyCodes = {
	comma: 188,
	enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];
const suggestions = [
    {text: 'Web' },
    {text: 'Cloud' },
    {text: 'React' },
    {text: 'Kubernetes' },
    {text: 'GoLang' },
    {text: 'DevOps' }
]
function EditCourse(props) {
    const [tags , setTags] = useState(["oldtag"])
	const [sections, setSections ] = useState([{title: "Section initial", 
    content:`<h1> This is an old section </h1>
    <p> perhaps perhaps perhaps </p>` }])

    const handleDelete=(i)=> {
       const newTags = tags.filter((tag, index) => index !== i) ;
        setTags(newTags);
    }

    const handleAddition=(tag)=> {
        setTags( [...tags, tag] );
		
    }
    const handleDrag =(tag, currPos, newPos) =>{
        
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags( newTags );
    }
        const [value, setValue] = useState('Beginner');
        
        const handleChangeLevel = (event) => {
            setValue(event.target.value);
            console.log(value)
        };
        
        const BlueRadio = withStyles({
            root: {
              color: "#1692bf",
              '&$checked': {
                color: "#1692bf",
              },
            },
            checked: {},
        })((props) => <Radio color="default" {...props} />);
        
        const addNewSection =()=>{
            setSections(
                [...sections, {title: "", 
                content:`<h1> This is a new section </h1>
                <p> Add the content ... </p>` }]
            )
        }
        const ChangeTitle =(valeur, index )=>{
            let variable = sections;
            
            variable[index].title = valeur ;
            
            this.setSections( variable)
            
        }
        const ChangeContent =(valeur, index)=>{
            
            let variable = sections;
            variable[index].content = valeur ;
            
            setSections(variable);
            console.log(sections);
    
        }
        const SaveText=()=>{
            
            var showdown  = require('showdown'),
                converter = new showdown.Converter();
    
                sections.map((e, index)=> {
                    e.content = converter.makeMarkdown(e.content)
                })
                console.log(sections)
                
                /*
                axios.post("http://localhost:5000/course/addSections", {
                    sections: this.state.sections ,
                    title : this.state.title,
                    teacher : this.state.teacher
                }).then(res=>{
                    console.log("Course content well added !! !")
                })
                */
        }
        return ( 
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Edit your course</h2>
                    </div>
                </div>
                <form className="form-style container-md mb- mt-5">
                    <input type="text"  placeholder="Course Title" required="false" value="Old value" />
                    <textarea placeholder="Course Description"value="Old value"></textarea>
                    <h6>Course Level</h6>
                    <FormControl component="fieldset" className="mb-4">
                        <RadioGroup row aria-label="gender"  value={value} onChange={handleChangeLevel}>
                            <FormControlLabel value="Beginner" control={<BlueRadio />} label="Beginner" />
                            <FormControlLabel value="Intermediate" control={<BlueRadio />} label="Intermediate" />
                            <FormControlLabel value="Advanced" control={<BlueRadio />} label="Advanced" />
                        </RadioGroup>
                    </FormControl>
                    <input type="text"  placeholder="Course Language" value="Old value" required ="false"/>
                    <ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={handleDelete}
									handleAddition={handleAddition}
                                    handleDrag={handleDrag}
									placeholder="Course key words ..."
                                    autofocus={false}
							delimiters={delimiters} />                    
                    <input type="number"  placeholder="Course Price in TND" value="1000" required ="false"/>
                    <input type="text"  placeholder="Image banner Link" value="Old value" required ="false"/>        
                </form>

                <div className="container-sm top-space mb-4">
                <button className="btn-outlined-sm mb-4" onClick={addNewSection} >Add a section </button>
                <br/>
                {sections.map((c, index)=>
                    <div className="mb-5">
                        <h5>Section {index+1} </h5>
                        <Section key={index} ChangeTitle={ChangeTitle} ChangeContent={ChangeContent} Contenu={c.content} index={index} /> 
                        <i className="far fa-trash-alt red-icon"/>
                        
                    </div>
                )} 
                 
                <button className="PrimaryButton mt-3 mb-4" onClick={SaveText} >Submit</button>
                <br/>
            </div>

            </div>
        );
    
}
 
export default EditCourse;