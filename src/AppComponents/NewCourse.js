import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';

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

function NewCourse(props) {

    const [Title, setTitle] = useState("")
    const [Teacher, setTeacher] = useState("")
    const [Category, setCategory] = useState("")
    const [Language, setLanguage] = useState("")
    const [Description, setDescription] = useState("")
    const [tags , setTags] = useState([])
	const [LevelValue, setLevelValue] = useState('Beginner');

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
        
        
        const handleChangeLevel = (event) => {
            setLevelValue(event.target.value);
            console.log(LevelValue);
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
        
        const handleClick = (event) => {
//            event.preventDefault();
    
            const newCourse = {
                title : Title ,
                category: Category ,
                language : Language ,
                level : LevelValue,
                description : Description ,
                teacher : Teacher,
                tags : tags
            }
            console.log(newCourse)
            axios.post('http://localhost:5000/course/add', newCourse).then(res=>{
                if (res.data == "yes") console.log("course created YESSS !!!!!!")
            })
            
        }
        return ( 
            <div>
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Add a course</h2>
                    </div>
                </div>
                <form className="form-style container-md mb-5">
                    <h2 className="text-center mt-4 mb-4"> First, fill informations of your course</h2>
                    <input type="text"  placeholder="Course Title" onChange={e => setTitle(e.target.value)} required={false}/>
                    <textarea placeholder="Course Description" onChange={e => setDescription(e.target.value)}></textarea>
                    
                    <h6>Course Level</h6>
                    <FormControl  className="mb-4">
                        <RadioGroup row aria-label="gender"  value={LevelValue} onChange={handleChangeLevel}>
                            <FormControlLabel value="Beginner" control={<BlueRadio />} label="Beginner" />
                            <FormControlLabel value="Intermediate" control={<BlueRadio />} label="Intermediate" />
                            <FormControlLabel value="Advanced" control={<BlueRadio />} label="Advanced" />
                        </RadioGroup>
                    </FormControl>

                    <input type="text"  placeholder="Course Language" onChange={e => setLanguage(e.target.value)} required={false}/>
                    <input type="text"  placeholder="Course Category" onChange={e => setCategory(e.target.value)} required={false}/>
                    <input type="text"  placeholder="Course Teacher" onChange={e => setTeacher(e.target.value)} required={false}/>

                    <ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={handleDelete}
									handleAddition={handleAddition}
                                    handleDrag={handleDrag}
									placeholder="Course key words ..."
                                    autofocus={false}
							delimiters={delimiters} />   
                    
                    <input type="number"  placeholder="Course Price in TND" required={false}/>
                    <input type="text"  placeholder="Image banner Link" required={false}/>        
                    <div className="text-center">
                        <button onClick={(e)=>{props.changeFatherStates(false,Teacher,Title); handleClick(e)}}   type="submit">Next ➜</button>
                    </div>
                </form>
            </div>
        );
    
}
 
export default NewCourse;