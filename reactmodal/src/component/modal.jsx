import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Button,
  Dialog,
} from '@material-ui/core/';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(4),
//     outline: 'none',
//   },
// }));

function ModalExample() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Button variant='outlined' onClick={handleOpen}>
          click me
        </Button>
      </div>
      <>
        <Dialog
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          onClose={handleClose}
        >
          <DialogTitle id='alert-dialog-title'>
            {"Use Google's location service?"}
          </DialogTitle>

          <DialogContent>
            <DialogContentText
              id='alert-dialog-description'
              className='mansoor'
            >
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
          <></>
          {/* </div> */}
        </Dialog>
      </>
      <></>
    </div>
  );
}

export default ModalExample;
