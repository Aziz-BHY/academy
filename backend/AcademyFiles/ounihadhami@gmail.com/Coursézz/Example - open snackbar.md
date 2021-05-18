# Simple snackbars

A basic snackbar that aims to reproduce Google Keep's snackbar behavior.

## OPEN SIMPLE SNACKBAR

<br>

<br>

<pre>import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () =&gt; {
    setOpen(true);
  };

  const handleClose = (event, reason) =&gt; {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    &lt;div&gt;
      &lt;Button onClick={handleClick}&gt;Open simple snackbar&lt;/Button&gt;
      &lt;Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          &lt;React.Fragment&gt;
            &lt;Button color="secondary" size="small" onClick={handleClose}&gt;
              UNDO
            &lt;/Button&gt;
            &lt;IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}&gt;
              &lt;CloseIcon fontSize="small" /&gt;
            &lt;/IconButton&gt;
          &lt;/React.Fragment&gt;
        }
      /&gt;
    &lt;/div&gt;
  );
}
</pre>

<br>

