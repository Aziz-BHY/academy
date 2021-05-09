import React, { Component } from 'react';
import './SpecialCss/AuthStyle.css';
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const dispatch = useDispatch();
const history = useHistory();
class Authentification extends Component {
    async googleSuccess (res) {
        console.log(res)
        /*const result = res?.profileObj;
        const token = res?.tokenId;
    
        try {
          dispatch({ type: AUTH, data: { result, token } });
    
          history.push('/');
        } catch (error) {
          console.log(error);
        }*/
      };
    
    googleError(err){
        alert('Google Sign In was unsuccessful. Try again later');
        console.log(err);

    }
    render() { 
        return ( 
            
                <section className="w3l-workinghny-form">
                    <div className="top">
                        <div className="wrapper mt-4">
                            <div className="workinghny-block-grid">
                                <div className="form-right-inf">
                                    <h2 className="text-center" >Sign up</h2>
                                    <div className="social-media">
                                        <Link to="/fillProfile" className="Linky">
                                            <a className="github"><i className="fab fa-github icon-mr"></i> <span>Sign up with GitHub</span> </a>
                                        </Link>
                                        <Link to="/fillProfile" className="Linky">
                                            <a className="google"><i class="fab fa-google icon-mr"></i> <span>Sign up with Google</span> </a>
                                        </Link>
                                        <div>
                                            <GoogleLogin
                                            clientId="532469346612-2klpg2n8isd862rln18qjsnmbt6qh2iv.apps.googleusercontent.com"
                                            buttonText="Sign up with google"
                                            onSuccess={this.googleSuccess}
                                            onFailure={this.googleError}
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
    }
}
 
export default Authentification;