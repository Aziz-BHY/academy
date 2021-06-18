import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar} from '@material-ui/core';

const user = JSON.parse(localStorage.getItem('profile'))
const email = user?.result.email

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  logout:{
    backgroundColor :"#1692bf",
    color :'white',
    '&:hover': {
      background: "#4ab6dd",
   },
  },
  MenuItem:{
    backgroundColor :"white",
    color :'black',
    '&:hover': {
      background: "#F0F0F0",
   },
  },
  
}));

export default function ProfileMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  

  return (
    <div className={classes.root}>
      
      <div>
        <div
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>

          <Avatar 
            alt={props.user?.result.name} 
            src={props.user?.result.imageUrl}
            ></Avatar>
        </div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList  id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <a className="MenuLink" href={'/Yourprofile/'+user?.result.email}>
                    <MenuItem>
                      <span className="MenuLink">My Profile</span> 
                    </MenuItem>
                  </a>
                  <a className="MenuLink" href='/settings'>
                    <MenuItem>
                      <span className="MenuLink">Settings</span> 
                    </MenuItem>
                  </a> 
                  <a className="MenuLink" href='/NewCourse'>
                    <MenuItem >
                      <span className="MenuLink">New Course</span> 
                    </MenuItem>
                  </a>
                  <MenuItem className={classes.logout} onClick={props.logout}><span className="Poppins" >Logout</span> </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
