import React from 'react';
import PracticeAreasList from './practiceAreasList';

const PracticeAreas = () => {
  return (
    <section className="page-practice-areas">
      <div className="container">
        <h1 className="heading1 mb-30 center">Practice Areas</h1>
        <p className="body2 subtext mb-60 mb-md-40 center">
        Lexwell Partners is a dynamic and client-centric law firm
              representing clients across various legal forums. <br /> We are dedicated
              to delivering effective legal solutions tailored to meet the
              unique needs of each client.
        </p>
        <PracticeAreasList numberOfItems={null} />
      </div>
    </section>
  );
};

export default PracticeAreas;
