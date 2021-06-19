import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { WithContext as ReactTags } from 'react-tag-input';
import Section from './Section';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import SuccessMsg from './SuccessMsg';

const KeyCodes = {
    comma: 188,
    enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];


function EditCourse(props) {
    const BlueRadio = withStyles({
        root: {
            color: "#1692bf",
            '&$checked': {
                color: "#1692bf",
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    const user = JSON.parse(localStorage.getItem('profile'))
    const email = user?.result.email

    const [success, setSuccess] = useState(false)
    const [id, setID] = useState("")
    const [Title, setTitle] = useState("")
    const [Category, setCategory] = useState("")
    const [Language, setLanguage] = useState("")
    const [Description, setDescription] = useState("")
    const [LevelValue, setLevelValue] = useState('Beginner');
    const [Price, setPrice] = useState();
    const [Image, setImage] = useState();
    const [tags, setTags] = useState([])
    const [sectionTitle, setSectionTitle] = useState([])
    const [sections, setSections] = useState([{ title: "", content: "" }])
    const [course, setCourse] = useState({ sections: [] })
    const [change, setChange] = useState(false)
    const getDetails = () => {
        axios.get("http://localhost:5000/course/CourseDetail?id=" + props.match.params.idCourse + "&user=" + localStorage.getItem("profile")).then(
            res => {
                if (res.data.error) {
                    window.location.href = "/home"
                } else {
                    setID(props.match.params.idCourse)
                    setTitle(res.data.course.title)
                    setCategory(res.data.course.category)
                    setLanguage(res.data.course.language)
                    setLevelValue(res.data.course.level)
                    setDescription(res.data.course.description)
                    setTags(res.data.course.tags)
                    setPrice(res.data.course.price)
                    setImage(res.data.course.image)
                    setLevelValue(res.data.course.level)
                    setSectionTitle(res.data.sections)

                }

            })
        axios.get("http://localhost:5000/course/SectionDetails?id=" + props.match.params.idCourse).then(
            res => {
                setSections(res.data.sections)
            }
        )
    };

    useEffect(() => {
        getDetails()
    }, []);
    const handleDelete = (i) => {
        const newTags = tags.filter((tag, index) => index !== i);
        setTags(newTags);
        setChange(true)

    }
    const handleClose = () => {
        setSuccess(false)
    }
    const handleAddition = (tag) => {
        setTags([...tags, tag]);
        setChange(true)


    }
    const handleDrag = (tag, currPos, newPos) => {

        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
        setChange(true)

    }

    const handleChangeLevel = (event) => {
        setLevelValue(event.target.value);
        setChange(true)

    };



    const addNewSection = () => {
        setSections(
            [...sections, {
                title: "",
                content: `<h1> This is a new section </h1> `
            }]
        )
        setChange(true)

    }
    const ChangeTitle = (valeur, index) => {
        let variable = [...sections];

        variable[index].title = valeur;


        setSections(variable)
        setChange(true)


    }
    const ChangeContent = (valeur, index) => {

        let variable = sections;
        variable[index].content = valeur;

        setSections(variable);
        setChange(true)


    }
    const convertToHTML = (string) => {
        var showdown = require('showdown'),
            converter = new showdown.Converter();
        let c = converter.makeHtml(string);
        return c
    }
    const deleteSection = (index) => {
        let variable = [...sections];
        variable.splice(index, 1);
        console.log(sections)
        setSections(variable);
        setChange(true)
    }

    const SaveEdits = () => {
        var showdown = require('showdown'),
            converter = new showdown.Converter();

        sections.map((e, index) => {
            e.content = converter.makeMarkdown(e.content)
        })
        console.log(sections)

        const CourseModified = {
            _id: id,
            title: Title,
            category: Category,
            language: Language,
            level: LevelValue,
            description: Description,
            tags: tags,
            image: Image,
            price: Price,
            sections: sections,
            teacherEmail: email,
        }

        axios.post("http://localhost:5000/course/modifyContent", {
            course: CourseModified,
        }).then(
            res => {
                console.log(res.data)
                setSuccess(true)
                //console.log("well modified !")
            }
        )
    }
    return (
        <div>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Edit your course</h2>
                </div>
            </div>

            <form className="form-style container-md mb- mt-5">
                <input type="text" placeholder="Course Title" required="false" value={Title} onChange={(e) => { setTitle(e.target.value) }} />
                <textarea placeholder="Course Description" value={Description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                <h6>Course Level</h6>
                <FormControl component="fieldset" className="mb-4">
                    <RadioGroup row aria-label="gender" value={LevelValue} onChange={handleChangeLevel}>
                        <FormControlLabel value="Beginner" control={<BlueRadio />} label="Beginner" />
                        <FormControlLabel value="Intermediate" control={<BlueRadio />} label="Intermediate" />
                        <FormControlLabel value="Advanced" control={<BlueRadio />} label="Advanced" />
                    </RadioGroup>
                </FormControl>

                <input type="text" placeholder="Course Language" value={Language} required="false" onChange={(e) => { setLanguage(e.target.value) }} />
                <input type="text" placeholder="Course Category" value={Category} onChange={e => setCategory(e.target.value)} required={false} />

                <ReactTags tags={tags}
                    //suggestions={suggestions}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    placeholder="Course key words ..."
                    autofocus={false}
                    delimiters={delimiters} />
                <input type="number" placeholder="Course Price in TND" value={Price} required="false" onChange={(e) => { setPrice(e.target.value) }} />
                <input type="text" placeholder="Image banner Link" value={Image} required="false" onChange={(e) => { setImage(e.target.value) }} />
            </form>

            <div className="container-sm top-space mb-4">
                <button className="btn-outlined-sm mb-4" onClick={addNewSection} >Add a section </button>
                <br />
                {sections.map((c, index) =>
                    <div className="mb-5">
                        <h5>Section {index + 1} </h5>
                        <Section
                            key={index}
                            ChangeTitle={ChangeTitle}
                            ChangeContent={ChangeContent}
                            Contenu={convertToHTML(c.content)}
                            Title={c.title}
                            index={index}
                        />
                        <i className="far fa-trash-alt red-icon" onClick={() => deleteSection(index)} />

                    </div>
                )}

                <button className="PrimaryButton mt-3 mb-4" onClick={SaveEdits} >Submit</button>
                <br />
            </div>

            <div className="mt-5" >
                <SuccessMsg
                    success={success}
                    msg="Profile updated successfully ! "
                    handleClose={handleClose}
                />
            </div>

        </div>
    );

}

export default EditCourse;