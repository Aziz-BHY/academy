import axios from 'axios';

const EmailToName= ( email)=>{
    
    axios.post(("http://localhost:5000/user/getUserName"),{
        email : email
    }).then(res=>{
        console.log('le nom convenable est --> '+res.data)
        return(res.data)
        
    })
} 
export default EmailToName;