import React from 'react';
import PracticeAreaDialog from './practiceAreaDialog';

const PracticeAreaCard = ({ practiceArea }) => {
  const { areaName, areaDescription, areaImg } = practiceArea;
  const [openPracticeArea, setOpenPracticeArea] = React.useState(false);

  const handlePracticeAreaDialog = () => {
    setOpenPracticeArea(true);
  };

  const handleClose = () => {
    setOpenPracticeArea(false);
  };

  return (
    <>
      <button className="single-area" onClick={handlePracticeAreaDialog}>
        <div className="area-header">
          <img src={areaImg} alt="" role="presentation" />
        </div>
        <div className="area-body">
          <h3 className="heading3 mb-10">{areaName}</h3>
          <p className="subtext body2">{areaDescription}</p>
        </div>
      </button>
      <PracticeAreaDialog open={openPracticeArea} practiceArea={practiceArea} onClose={handleClose} />
    </>
  );
};

export default PracticeAreaCard;
