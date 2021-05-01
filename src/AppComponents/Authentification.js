import React, { Component } from 'react';
import './SpecialCss/AuthStyle.css';
import {Link} from 'react-router-dom';

class Authentification extends Component {
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