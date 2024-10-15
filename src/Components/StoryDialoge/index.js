import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Stories from './Stories';
import { DialogContent } from '@mui/material';

export default function StoryDialoge({ open, handleClose,storyId }) {
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
            backdropFilter: 'blur(10px)', // Blur effect
          },
        }}
      >
        <DialogActions sx={{ position: 'absolute', top: 2, right: 10 }}>
          <Button onClick={handleClose} autoFocus>
            <CloseIcon sx={{ color: 'white' }} /> {/* Make the close icon white */}
          </Button>
        </DialogActions>
        <DialogContent sx={{ padding: 0 }}>
          <Stories storyId={storyId} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
