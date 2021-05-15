import React from 'react';
import './SpecialCss/AuthStyle.css';
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AUTH } from '../constants/actionTypes';
import axios from 'axios';

const Authentification =()=> {
    const dispatch = useDispatch();
    const history = useHistory();
    const googleSuccess = async (res) => {
        //console.log(res)
        const result = res?.profileObj;
        const token = res?.tokenId;
    
        await axios.post('http://localhost:5000/user/', result).then(res=>{
            if (res.data == "yes") console.log("user created YESSS !!!!!!")
            if (res.data == "no") console.log("user already exists ...")
            try {
                dispatch({ type: AUTH, data: { result, token } });
                  ///console.log('dispatch')
                  if (res.data == "yes") history.push('/fillProfile');
                  if (res.data == "no") history.push('/home');
                  
              } catch (error) {
                console.log(error);
            }
        })
        
    };
    
    const googleError = (err) =>{
        alert('Google Sign In was unsuccessful. Try again later');
        console.log(err);

    }

        return ( 
                <section className="w3l-workinghny-form">
                    <div className="top">
                        <div className="wrapper mt-4">
                            <div className="workinghny-block-grid">
                                <div className="form-right-inf">
                                    <h2 className="text-center mb-5" >Sign up</h2>
                                    <div className="social-media">
                                        
                                        <a className="github"><i className="fab fa-github icon-mr"></i> <span>Sign up with GitHub</span> </a>

                                        <a className="google"><i className="fab fa-google icon-mr"></i> <span>Sign up with Google</span> </a>
                                        <div className="mt-4">
                                            <GoogleLogin
                                            clientId="532469346612-2klpg2n8isd862rln18qjsnmbt6qh2iv.apps.googleusercontent.com"
                                            buttonText="Sign up with google"
                                            onSuccess={googleSuccess}
                                            onFailure={googleError}
                                            cookiePolicy={'single_host_origin'}
                                            
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

        );
    
};
 
export default Authentification;