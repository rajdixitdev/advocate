import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import PractiseAreasList from './practiseAreasList';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Home = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="container">
          <Grid
            container
            spacing={{ xs: 5, sm: 8, lg: 10 }}
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
              <div className="banner-content">
                <h1 className="heading1 mb-50 mb-md-40 mb-sm-30">
                  Committed To Helping Our Clients{' '}
                  <span className="primary text-with-underline">
                    Succeed.{' '}
                    <img
                      src="assets/images/underline.svg"
                      alt=""
                      role="presentation"
                    />
                  </span>
                </h1>
                <p className="mb-20">
                  Lexwell Partners is a dynamic and client-centric law firm
                  representing clients across various legal forums. We are
                  dedicated to delivering effective legal solutions tailored to
                  meet the unique needs of each client.
                </p>
                <p>
                  At Lexwell Partners, we specialize in providing comprehensive
                  legal services across a broad spectrum of forums, including
                  the Supreme Court of India, Delhi High Court, NCLAT, NCLT,
                  CAT, NCDRC, District and Sessions Courts, DRT, and DRAT. With
                  a deep understanding of the law and over five years of
                  experience, our team is well-equipped to handle complex legal
                  challenges with precision and strategic foresight.
                </p>
                <div className="justify-start mt-30">
                  <Link to="/contact-us" className="btn btn-primary mr-20">
                    Get Started
                  </Link>
                  <Link to="/about-us" className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item size={{ xs: 12, md: 6, lg: 5 }}>
              <figure>
                <img
                  src="assets/images/orderHammer.png"
                  alt=""
                  role="presentation"
                />
              </figure>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className="powering-communication">
        <div className="container">
          <Grid container spacing={{ xs: 5, sm: 8, lg: 10 }} alignItems={'center'}>
            <Grid item size={{ xs: 12, md: 5, xl: 4.5 }}>
              <figure className="img-cover">
                <img
                  src="assets/images/section-2.png"
                  alt="Video Communication"
                />
              </figure>
            </Grid>
            <Grid item size={{ xs: 12, md: 7, xl: 7.5 }}>
              <h1 className="heading1 mb-50 mb-md-40 mb-sm-30">
                Powering your communication from{' '}
                <span className="primary text-with-underline">
                  Anywhere
                  <img
                    src="assets/images/underline.svg"
                    alt=""
                    role="presentation"
                  />
                </span>
                .
              </h1>
              <p className="subtext heading4">
                Lexwell Partners is always available to you, no matter where you
                are. Using secure, modern technology, we stay connected through
                calls, video chats, or messages. You can count on quick and easy
                communication, ensuring your legal needs are met without delay,
                wherever you may be.
              </p>
              <div className="flex-start mt-30">
                <Link
                  className="btn btn-primary"
                  to="https://web.whatsapp.com/send?phone=919015198051&text=Hello%20Lexwell%20Partners"
                >
                  Join Now
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className="practice-areas">
        <div className="container">
          <div className="space-between mb-40">
            <h2 className="heading1 center">Our Practise Areas</h2>
            <Link className="btn btn-primary" to="practise-areas">
              Discover All
            </Link>
          </div>
          <PractiseAreasList numberOfItems={3} />
        </div>
      </section>

      <section className="how-we-works">
        <div className="container">
          <div className="heading-section">
            <h2 className="heading1 mb-10">How LexwellPartners Works?</h2>
            <p>
              We bring communities together through social and virtual
              experiences
            </p>
          </div>
          <Grid container spacing={3} justifyContent={'center'}>
            <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
              <div className="step-card">
                <h2 className="step">
                  <span>01</span>
                </h2>
                <h2 className="mt-30 mb-10">
                  Client Consultation and Case Assessment
                </h2>
                <p className="subtext">
                  A client approaches the firm with a legal issue. The firm’s
                  lawyers assess the case, provide legal advice, and discuss
                  possible strategies.
                </p>
              </div>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
              <div className="step-card">
                <h2 className="step step2">
                  <span>02</span>
                </h2>
                <h2 className="mt-30 mb-10">Legal Representation and Action</h2>
                <p className="subtext">
                  The firm represents the client, whether through negotiation,
                  drafting legal documents, or representing them in court or
                  other legal proceedings.
                </p>
              </div>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
              <div className="step-card">
                <h2 className="step step3">
                  <span>03</span>
                </h2>
                <h2 className="mt-30 mb-10">
                  Case Resolution and <br />
                  Billing
                </h2>
                <p className="subtext">
                  Once the legal issue is resolved (through settlement, trial,
                  or other means), the firm charges the client based on the work
                  done, either on an hourly basis, contingency, or fixed fee.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="pro-trainers">
        <div className="container">
          <div className="heading-section">
            <h2 className="heading1 mb-10">Meet our Experts</h2>
            <p>
              Our experts are here to give you the education and confidence
              needed to be successful with a customized workout program designed
              for you
            </p>
          </div>
          <Grid container spacing={3} style={{ justifyContent: 'center' }}>
            <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
              <div className="advocate-card">
                <div className="advocate-image">
                  <img
                    src="assets/images/vivekRajProfile.jpeg"
                    alt="Vivek Raj"
                  />
                </div>
                <Link
                  className="heading3 mt-20 mb-10 semi-bold flex-center black"
                  to="/our-team"
                >
                  Vivek Raj
                </Link>
                <p className="subtext body2">
                  Co-Founder
                </p>
                <p className="subtext body2 mt-10">
                  Lexwell Partners
                </p>
                <Link
                  to="mailto:vivek@lexwellpartners.com"
                  className="flex-center mb-10 mt-20 black"
                >
                  <EmailOutlinedIcon className="mr-5" fontSize="small" />
                  vivek@lexwellpartners.com
                </Link>
                {/* <div className="review-cover">
                  <div className="rating">
                    <h4 className="semi-bold">
                      <img src="assets/icons/star-orange-icon.svg" alt="Star" />{' '}
                      4.8
                    </h4>
                    <h5 className="regular">Average Rating</h5>
                  </div>
                  <div className="rating">
                    <h4 className="semi-bold">900+</h4>
                    <h5 className="regular">Happy Clients</h5>
                  </div>
                </div> */}
              </div>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
              <div className="advocate-card">
                <div className="advocate-image">
                  <img
                    src="assets/images/neerajProfile.jpeg"
                    alt="Neeraj Badjatya"
                  />
                </div>
                <Link
                  to="/our-team"
                  className="heading3 mt-20 mb-10 semi-bold flex-center black"
                >
                  Neeraj Badjatya
                </Link>
                <p className="subtext body2">
                  Co-Founder
                </p>
                <p className="subtext body2 mt-10">
                  Lexwell Partners
                </p>
                <Link
                  to="mailto:neeraj@lexwellpartners.com"
                  className="flex-center mb-10 mt-20 black"
                >
                  <EmailOutlinedIcon className="mr-5" fontSize="small" />
                  neeraj@lexwellpartners.com
                </Link>
                {/* <div className="review-cover">
                  <div className="rating">
                    <h4 className="semi-bold">
                      <img src="assets/icons/star-orange-icon.svg" alt="Star" />{' '}
                      4.8
                    </h4>
                    <h5 className="regular">Average Rating</h5>
                  </div>
                  <div className="rating">
                    <h4 className="semi-bold">900+</h4>
                    <h5 className="regular">Happy Clients</h5>
                  </div>
                </div> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className="join-now">
        <div className="join-now-content">
          <h3 className="heading1 mb-30 uppercase">Ready to get started</h3>
          <p className="regular body2 mb-40">
            We always appreciate new talents who are dedicated and motivated by
            the prospect of doing their best work everyday. We strive to embody
            the following ideals in everything we do.
          </p>
          <div className="flex-center">
            <Link className="btn btn-primary" to="/career">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
