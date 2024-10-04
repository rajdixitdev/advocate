import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Link } from 'react-router-dom';

const DisclaimerDialog = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      aria-labelledby="disclaimer dialog"
      maxWidth={'md'}
      fullWidth
    >
      <DialogTitle id="alert-dialog-title" className="bold" variant="h6">
        DISCLAIMER
      </DialogTitle>
      <DialogContent>
        <p className="body2 mb-20">
          The rules of the Bar Council of India prohibit lawyers/law firms from
          soliciting work or advertising in any manner. By clicking on ‘I
          AGREE’, the user acknowledges the following:
        </p>
        <ul>
          <li>
            <p className="body2 mb-20">
              (1) The user wishes to obtain more information about ASG &
              Partners’ practice areas and its lawyers, for his/her own
              information and use;
            </p>
          </li>
          <li>
            <p className="body2 mb-20">
              (2) The information is made available/provided to the user only on
              his/her specific request and any information obtained or material
              downloaded from this website is completely at the user’s
              preference and any transmission, receipt or use of this website is
              not intended to, and will not, create any lawyer-client
              relationship;
            </p>
          </li>
          <li>
            <p className="body2 mb-20">
              (3) None of the information contained on the website is in the
              nature of a legal opinion or otherwise amounts to any legal
              advice; and
            </p>
          </li>
          <li>
            <p className="body2">
              (4) Lexwell Partners is not liable for any consequence of any
              action taken by the user relying on material/information provided
              on this website. In cases where the user has any legal issues,
              he/she in all cases must seek independent legal advice.
            </p>
          </li>
        </ul>
        <div className="justify-end mt-30">
          <Link className="btn btn-secondary" to="https://www.google.com/">
            I Disagree
          </Link>
          <button className="btn btn-primary ml-20" onClick={handleClose}>
            I Agree
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
