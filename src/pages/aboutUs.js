import { Grid2 } from '@mui/material';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="page-about-us">
      <div className="container">
        <h1 className="heading1 mb-30 center">About Us</h1>
        <p className="body2 subtext mb-60 mb-md-40 mb-sm-30 mb-xs-20 center">
          Lexwell Partners is a dynamic and client-centric law firm representing
          clients across various legal forums. <br /> We are dedicated to
          delivering effective legal solutions tailored to meet the unique needs
          of each client.
        </p>
        <div className="row" style={{alignItems: 'stretch'}}>
          <div className="col-6 col-lg-12 mb-30">
            <figure className="h-100 aboveFigure">
              <img
                src="assets/images/lawOffice1.jpg"
                alt=""
                role="presentation"
              />
            </figure>
          </div>
          <div className="col-6 col-lg-12 mb-30">
            <figure className=" h-100 aboveFigure">
              <img
                src="assets/images/lawOffice2.png"
                alt=""
                role="presentation"
              />
            </figure>
          </div>
        </div>

        <p className="body2 mb-20">
          At Lexwell Partners, we specialize in providing comprehensive legal
          services across a broad spectrum of forums, including the Supreme
          Court of India, Delhi High Court, NCLAT, NCLT, CAT, NCDRC, District
          and Sessions Courts, DRT, and DRAT. With a deep understanding of the
          law and over five years of experience, our team is well-equipped to
          handle complex legal challenges with precision and strategic
          foresight.
        </p>
        <p className="body2 mb-20">
          Our professional strength is derived from a unique combination of
          expertise in the relevant practice area and an in-depth industry
          focus. The firm also has best friends’ relationship with a global law
          firm network – Cathay Associates, in an exclusive referral arrangement
          for India. The Cathay network has more than 60 law firm offices in 50
          countries.
        </p>
        <p className="heading3 semi-bold mb-10">Our Expertise</p>
        <p className="body2 mb-10">
          We offer a wide range of legal services, particularly excelling in the
          drafting and execution of agreements. Our areas of expertise include:
        </p>
        <ul className="expertise-list">
          <li className="body2">Mergers and Acquisitions</li>
          <li className="body2">Shareholder Agreements</li>
          <li className="body2">Joint Venture Agreements</li>
          <li className="body2">Partnership Deeds</li>
          <li className="body2">Non-Disclosure Agreements</li>
          <li className="body2">Employment Contracts</li>
          <li className="body2">Service Agreements</li>
          <li className="body2">Commercial Contracts</li>
        </ul>
        <p className="body2 mt-10 mb-20">
          Our founding partners, along with a highly skilled team of lawyers and
          legal luminaries, bring diverse expertise to every matter, ensuring
          that each case is handled with the highest degree of professionalism
          and attention to detail. Our team is specialized in contract law and
          several other key areas, providing a solid foundation for
          comprehensive legal solutions.
        </p>
        <figure className="mb-30 figure2">
          <img src="assets/images/lawTable2.jpg" alt="" role="presentation" />
        </figure>
        <p className="heading3 semi-bold mb-10">Our Approach</p>
        <p className="body2 mb-20">
          At Lexwell Partners, we believe in a personalized, solution-oriented
          approach to legal practice. Our commitment to professionalism,
          integrity, and results-driven counsel ensures that every client
          receives the highest standard of legal service. We work closely with
          our clients, offering practical and strategic advice to help them
          navigate legal complexities with confidence.
        </p>
        <p className="heading3 semi-bold mb-10">Why Choose Lexwell Partners?</p>
        <p className="body2 mb-20">
          <span className="semi-bold">Experienced Advocates:</span> Our team is
          led by highly experienced advocates who have a proven track record in
          both litigation and advisory services.
        </p>
        <p className="body2 mb-20">
          <span className="semi-bold">Client-Centric Solutions:</span> We
          prioritize our clients' needs, crafting legal strategies that align
          with their business goals.
        </p>
        <p className="body2 mb-20">
          <span className="semi-bold">Expert Drafting:</span> Our meticulous
          attention to detail ensures that every legal document and agreement is
          watertight and tailored to specific client requirements.
        </p>
        <p className="body2 mb-20">
          <span className="semi-bold">Skilled Team:</span> Backed by a team of
          seasoned lawyers, we provide specialized expertise in various legal
          disciplines to deliver unparalleled results.
        </p>
        <p className="heading3 semi-bold mb-10">Contact Us</p>
        <p className="body2 mb-20">
          If you are seeking reliable, experienced legal counsel, we invite you
          to connect with us. Whether you need representation in court or
          assistance with complex transactions, Lexwell Partners is here to help
          you achieve your legal objectives.
        </p>
        {/* <Grid2 container spacing={{ xs: 5, sm: 8, lg: 10 }}>
          <Grid2 item size={{ xs: 12, sm: 6, md: 4 }}>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 8 }}>
          </Grid2>
          <Grid2 item size={{ xs: 12 }}>
          </Grid2>
        </Grid2> */}
      </div>
    </section>
  );
};

export default AboutUs;
