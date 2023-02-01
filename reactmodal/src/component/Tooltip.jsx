import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  // const handleClick = () => {
  //   console.info('You clicked the Chip.');
  // };

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        {/* title can be added from backend with {brackets and fetch anything} */}
        <Tooltip title='i am the title' placement='top'>
          <Chip
            variant='danger'
            ref={target}
            onClick={() => setShow(!show)}
            label='Request id:'
            color='secondary'
            // variant="secondary"
            // color="primary"
            clickable
            style={{ width: '110px', marginRight: '15px' }}
            onDelete={() => {
              handleDelete();
              // setOpen(true);
            }}
          />

          {/* <Dailog open={open} handleClose={handleClose} /> */}
        </Tooltip>
        {/* <Chip
          label="Deletable primary"
          onDelete={handleDelete}
          color="neutral"
          clickable
          style={{ width: "110px", marginRight: "5px" }}
        /> */}
      </div>
    </div>
  );
}
