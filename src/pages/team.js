import React from 'react';

const Team = () => {
  return (
    <section className="page-our-team">
      
      <div className="container">
        <h1 className="heading1 mb-30 center">Our Team</h1>
        <p className="body2 subtext mb-60 mb-md-40 center">
          Lexwell Partners is a dynamic and client-centric law firm representing
          clients across various legal forums. <br /> We are dedicated to
          delivering effective legal solutions tailored to meet the unique needs
          of each client.
        </p>
        <ul className="team-list">
          <li className="single-team-member">
            <div className="img-cover">
              <img src="assets/images/vivekRajProfile.jpeg" alt="Vivek Raj" />
            </div>
            <div className="team-member-detail">
              <h2 className="heading2 mb-10">Vivek Raj</h2>
              <p className="designation">Co-Founder</p>
              <hr />
              <p className="body2">
                Vivek Raj is an accomplished advocate with a strong track record
                of representing clients in a broad spectrum of legal forums,
                including the Supreme Court of India, Delhi High Court, NCLAT,
                NCLT, CAT, NCDRC, District and Sessions Courts, DRT, and DRAT.
                He holds a law degree from Amity Law School, Delhi (GGSIPU),
                Vivek brings over five years of in-depth legal experience to the
                table, delivering both practical and strategic legal solutions.
                <br />
                <br />
                Vivek has a robust practice in the drafting and execution of
                various legal agreements. His expertise spans Mergers and
                Acquisitions, Shareholder Agreements, Joint Venture Agreements,
                Partnership Deeds, Non-Disclosure Agreements, Employment
                Contracts, Service Agreements, and an array of Commercial
                Contracts. Known for his precision and thorough understanding of
                contract law, he is adept at tailoring agreements to meet the
                specific needs of clients. As a Founding Partner of Lexwell
                Partners, he is deeply committed to offering high-quality legal
                counsel, ensuring his clients' interests are protected and
                advanced in every matter.
              </p>
            </div>
          </li>
          <li className="single-team-member">
            <div className="img-cover">
              <img
                src="assets/images/neerajProfile.jpeg"
                alt="Neeraj Badjatya"
              />
            </div>
            <div className="team-member-detail">
              <h2 className="heading2 mb-10" id="neerajProfile">
                Neeraj Badjatya
              </h2>
              <p className="designation">Co-Founder</p>
              <hr />
              <p className="body2">
                Neeraj Badjatya is a distinguished Advocate with extensive
                experience in handling complex legal matters across multiple
                forums, including the Supreme Court of India, Delhi High Court,
                NCLAT, NCLT, CAT, NCDRC, District and Sessions Courts, DRT, and
                DRAT. A graduate of Amity Law School, Delhi (GGSIPU), Neeraj has
                been practicing law for over five years, gaining a reputation
                for his expertise in both litigation and corporate legal
                services.
                <br />
                <br />
                Neeraj specializes in the drafting and execution of a wide range
                of legal agreements, including Mergers and Acquisitions,
                Shareholder Agreements, Joint Venture Agreements, Partnership
                Deeds, Non-Disclosure Agreements, Employment Contracts, Service
                Agreements, and various Commercial Contracts. His strategic
                approach and attention to detail ensure that clients receive
                comprehensive and tailored legal solutions. As a founding
                partner of Lexwell Partners, he is committed to providing
                insightful legal counsel, safeguarding the interests of his
                clients in every matter.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
