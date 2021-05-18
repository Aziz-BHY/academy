import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function SimpleSnackbar(props) {
  
  
  return (
    <div >
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={props.waiting}
        
        message={props.msg}
       
      />
    </div>
  );
}
