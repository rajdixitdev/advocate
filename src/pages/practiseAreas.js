import React from 'react';
import PractiseAreasList from './practiseAreasList';

const PractiseAreas = () => {
  return (
    <section className="page-practice-areas">
      <div className="container">
        <h1 className="heading1 mb-30 center">Practise Areas</h1>
        <p className="body2 subtext mb-60 mb-md-40 mb-sm-30 mb-xs-20 center">
        Lexwell Partners is a dynamic and client-centric law firm
              representing clients across various legal forums. <br /> We are dedicated
              to delivering effective legal solutions tailored to meet the
              unique needs of each client.
        </p>
        <PractiseAreasList numberOfItems={null} />
      </div>
    </section>
  );
};

export default PractiseAreas;
