import React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const PracticeAreaDialog = ({ open, onClose, practiceArea }) => {
  const { areaName, areaDescription, areaImg } = practiceArea;
  return (
    <Dialog
      open={open}
      aria-labelledby="Practice area dialog"
      maxWidth={'xs'}
      fullWidth
      onClose={onClose}
    >
      <div className="popup-ui practiceAreaDialog">
        <div className="popup-header">
          <h1 className="heading3 semi-bold">{areaName}</h1>
          <IconButton aria-label="close dialog" size="small" onClick={onClose}>
            <CloseIcon  className='black' />
          </IconButton>
        </div>
        <div className="popup-body">
          <figure className="mb-20">
            <img src={areaImg} alt={areaName} />
          </figure>
          <p>{areaDescription}</p>
        </div>
      </div>
    </Dialog>
  );
};

export default PracticeAreaDialog;
