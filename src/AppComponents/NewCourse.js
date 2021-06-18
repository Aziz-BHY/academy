import React, {useEffect} from 'react';
import { withStyles} from '@material-ui/core/styles';
import {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';
import WaitingBar from './WaitingBar';

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
    const [id, setId] = useState("")
    const [Title, setTitle] = useState("")
    const [Teacher, setTeacher] = useState({name :"", email :""})
    const [Category, setCategory] = useState("")
    const [Language, setLanguage] = useState("")
    const [Description, setDescription] = useState("")
    const [tags , setTags] = useState([])
	const [LevelValue, setLevelValue] = useState('Beginner');
    const [price, setPrice] = useState();
    const [image, setImage] = useState("https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png");
    const [waiting, setWaiting]=useState(false);

    var leID ="ps";
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('profile'));
        axios.post(("http://localhost:5000/user/getUserName"),{
            email : user?.result.email    
        }).then(res=>{
            setTeacher({name : res.data, email: user?.result.email})
        })
    })
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
        
        const handleClick = async (event) => {
            
            event.preventDefault();
            const newCourse = {
                title : Title ,
                category: Category ,
                language : Language ,
                level : LevelValue,
                description : Description ,
                teacher : Teacher,
                tags : tags,
                price : price,
                image : image,
                status : "pending"
            }
            console.log(newCourse)
            await axios.post('http://localhost:5000/course/add', newCourse).then(res=>{
                if (res.data.added == "yes") {
                    console.log("course created YESSS !!!!!! with id :" + res.data.id)
                    setId(res.data.id)
                    leID = res.data.id
                    setWaiting(true)
                }
                
            })
            await axios.post('http://localhost:5000/user/addPublished', {
                id :leID,
                email : Teacher.email
            } ).then(res=>{
                if (res.data == "yes") {
                    console.log("Published with success ;)" )
                    
                }
                
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
                        <RadioGroup row aria-label="level"  value={LevelValue} onChange={handleChangeLevel}>
                            <FormControlLabel value="Beginner" control={<BlueRadio />} label="Beginner" />
                            <FormControlLabel value="Intermediate" control={<BlueRadio />} label="Intermediate" />
                            <FormControlLabel value="Advanced" control={<BlueRadio />} label="Advanced" />
                        </RadioGroup>
                    </FormControl>

                    <input type="text"  placeholder="Course Language" onChange={e => setLanguage(e.target.value)} required={false}/>
                    
                    <input type="text"  placeholder="Course Category" onChange={e => setCategory(e.target.value)} required={false}/>

                    <ReactTags tags={tags}
									//suggestions={suggestions}
									handleDelete={handleDelete}
									handleAddition={handleAddition}
                                    handleDrag={handleDrag}
									placeholder="Course key words ..."
                                    autofocus={false}
							delimiters={delimiters} />   
                    
                    <input type="number"  placeholder="Course Price in TND" onChange={e => setPrice(e.target.value)} required={false}/>
                    
                    <input type="text"  placeholder="Image banner Link" 
                        value={image}
                        onChange={e => setImage(e.target.value)} required={false}/>      

                    <div className="text-center">
                        <button 
                            onClick={async (e)=>{ await handleClick(e); 
                             props.changeFatherStates(false,leID)}}   
                            type="submit">

                            Next ➜
                        </button>
                    </div>
                    
                </form>
                <WaitingBar 
                    msg="Please wait ..."
                    waiting={waiting}
                />
            </div>
        );
    
}
 
export default NewCourse;