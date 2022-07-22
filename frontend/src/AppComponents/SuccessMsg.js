import React  from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      
    },
    snack:{
        fontSize:'100px',
        borderColor:"#fff"
    }
  }));

export default function SuccessMsg(props) {
    const msg = props.msg
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Snackbar 
            className={classes.snack}
            anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
            }} 
            open={props.success} 
            autoHideDuration={1500} 
            onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    {msg}
                </Alert>
        </Snackbar>
    </div> 
    
      
  );
}
