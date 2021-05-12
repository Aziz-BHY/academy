import React , { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  Toolbar, Avatar, Button } from '@material-ui/core';
import * as actionType from '../constants/actionTypes';
import useStyles from './SpecialCss/header_styles';
import decode from 'jwt-decode';

const HeaderComponent =()=> {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
    };
    useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

    console.log(user);

        return ( 
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="/home">Creometry </a></h1>
                    
                    <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/coursesList" >Courses</a></li>
                            <li><a href="/profile">Profile</a></li>
                            
                            
                        </ul>
                        <Toolbar className={classes.toolbar}>
                            {user?.result ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                            </div>
                            ) : (
                                <a href="/authentification" className="get-started-btn">Get Started ➜ </a>
                            )}
                        </Toolbar>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    
                    
                </div>
            </header>
        );
}
 
export default HeaderComponent;