import React from 'react';
import PractiseAreaDialog from './practiseAreaDialog';

const PractiseAreaCard = ({ practiseArea }) => {
  const { areaName, areaDescription, areaImg } = practiseArea;
  const [openPractiseArea, setOpenPractiseArea] = React.useState(false);

  const handlePractiseAreaDialog = () => {
    setOpenPractiseArea(true);
  };

  const handleClose = () => {
    setOpenPractiseArea(false);
  };

  return (
    <>
      <button className="single-area" onClick={handlePractiseAreaDialog}>
        <div className="area-header">
          <img src={areaImg} alt="" role="presentation" />
        </div>
        <div className="area-body">
          <h3 className="heading3 mb-10">{areaName}</h3>
          <p className="subtext body2">{areaDescription}</p>
        </div>
      </button>
      <PractiseAreaDialog open={openPractiseArea} practiseArea={practiseArea} onClose={handleClose} />
    </>
  );
};

export default PractiseAreaCard;
