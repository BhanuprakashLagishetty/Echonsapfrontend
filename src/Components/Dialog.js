import * as React from 'react';

import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, onClose,selectedImage }) {
  console.log("selectedImage",open)
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <img src={selectedImage} alt='unable to load'></img>

    </Dialog>
  );
}
