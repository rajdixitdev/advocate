import React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const PractiseAreaDialog = ({ open, onClose, practiseArea }) => {
  const { areaName, areaDescription, areaImg } = practiseArea;
  return (
    <Dialog
      open={open}
      aria-labelledby="practise area dialog"
      maxWidth={'xs'}
      fullWidth
      onClose={onClose}
    >
      <div className="popup-ui practiseAreaDialog">
        <div className="popup-header">
          <h1 className="heading3 semi-bold">{areaName}</h1>
          <IconButton aria-label="close dialog" size="small" onClick={onClose}>
            <CloseIcon  className='black' />
          </IconButton>
        </div>
        <div className="popup-body">
          <figure className="mb-20">
            <img src={areaImg} alt={`${areaName} photo`} />
          </figure>
          <p>{areaDescription}</p>
        </div>
      </div>
    </Dialog>
  );
};

export default PractiseAreaDialog;
