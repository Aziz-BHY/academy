import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { 
    withStyles, makeStyles
 } from '@material-ui/core/styles';

const GreenButton = withStyles((theme) => ({
  root: {
    color:'#0a9976',
    
  },
}))(Button);
const RedButton = withStyles((theme) => ({
  root: {
    color:'#e33535',
    
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  dialog:{
    borderColor :"#1692bf",
    borderWidth : 10,
    fontFamily: 'Raleway, Arial'
  }
}));

export default function AlertDialog(props) {


  
  const classes = useStyles();

  return (
    <div>
      
      <Dialog
        
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.dialog}>
        <DialogTitle  id="alert-dialog-title">{"Are you sure ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you delete this course, this action will be irreversible
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <GreenButton onClick={props.handleAgree} >
            Agree
          </GreenButton>
          <RedButton onClick={props.handleClose} >
            Disagree
          </RedButton>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
