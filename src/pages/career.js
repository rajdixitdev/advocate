import { Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Career = () => {
  const form = useRef();
  const sendApplication = (e) => {
    e.preventDefault();
    alert('This Form is in development phase, Please try again later.');
  };

  return (
    <div className="page-career page-contact-us">
      <div className="container">
        <h1 className="heading1 mb-30 center">Career</h1>
        <p className="body2 subtext mb-60 mb-md-40 center">
          We always appreciate new talents who are dedicated and motivated by
          the prospect of doing their best work everyday.
          <br />
          We strive to embody the following ideals in everything we do.
        </p>

        <div className="contact-content">
          <Grid2 container>
            <Grid2 item size={{ xs: 12, md: 6 }} className="contact-for-career">
              <div className="contact-info">
                <h2 className="heading2 mb-5">Contact Information</h2>

                <ul>
                  <li className="flex al-center js-start flex-wrap">
                    <Link
                      to="tel:9015198051"
                      type="tel"
                      className="white"
                      target="_blank"
                    >
                      <CallOutlinedIcon className="white mr-20 mr-md-15 mr-xs-10" />
                      +91 9015198051,
                    </Link>
                    &nbsp;
                    <Link
                      to="tel:9650515440"
                      type="tel"
                      className="white"
                      target="_blank"
                    >
                      9650515440
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:contact@lexwellpartners.com"
                      type="mail"
                      className="white"
                      target="_blank"
                    >
                      <EmailOutlinedIcon className="white mr-20 mr-md-15 mr-xs-10" />{' '}
                      contact@lexwellpartners.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://maps.app.goo.gl/qtXMgGoEHJZzVZ6U7"
                      style={{ pointerEvents: 'none' }}
                      className="white"
                      target="_blank"
                    >
                      <LocationOnOutlinedIcon className="white mr-20 mr-md-15 mr-xs-10" />
                      D-9, Ground Floor, Jangpura Extension, Delhi - 110014
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://maps.app.goo.gl/CVdcn8zvuWSWcEVM6"
                      style={{ pointerEvents: 'none' }}
                      className="white"
                      target="_blank"
                    >
                      <LocationOnOutlinedIcon className="white mr-20 mr-md-15 mr-xs-10" />
                      F-104, Bailey Road, Patna, Bihar - 800014
                    </Link>
                  </li>
                  <li>
                    <h2 className="heading2 mt-10">
                      You can also follow us on:
                    </h2>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="white"
                      style={{ pointerEvents: 'none' }}
                    >
                      <img
                        src="assets/icons/facebook-white.svg"
                        alt="Facebook"
                        className="mr-20 mr-md-15 mr-xs-10"
                      />
                      facebook@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="white"
                      style={{ pointerEvents: 'none' }}
                    >
                      <img
                        src="assets/icons/twitter-white.svg"
                        alt="Youtube"
                        className="mr-20 mr-md-15 mr-xs-10"
                      />
                      twitter@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="white"
                      style={{ pointerEvents: 'none' }}
                    >
                      <img
                        src="assets/icons/insta-white.svg"
                        alt="Instagram"
                        className="mr-20 mr-md-15 mr-xs-10"
                      />
                      instagram@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="white"
                      style={{ pointerEvents: 'none' }}
                    >
                      <img
                        src="assets/icons/youtube-white.svg"
                        alt="Youtube"
                        className="mr-20 mr-md-15 mr-xs-10"
                      />
                      youtube@LexwellPartners
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <form ref={form} onSubmit={sendApplication}>
                <h2 className="heading2 mb-20">Apply for Internship</h2>
                <div className="form-group mb-20">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="fullName"
                    placeholder="Ex: John Doe"
                  />
                </div>
                <div className="form-group mb-20">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Ex: john@email.com"
                  />
                </div>
                <div className="form-group mb-20">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    name="phone"
                    placeholder="Ex: 99XXX XXXXX"
                  />
                </div>
                <div className="form-group mb-20">
                  <label for="workExp">Work Experience (in Years)</label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    name="exp"
                    placeholder="Ex: 3.5"
                  />
                </div>
                <div className="form-group mb-20">
                  <label for="resume">
                    Upload Your Resume on Lexwellpartners@gmail.com
                  </label>
                </div>
                <button
                  className="btn btn-primary mt-20"
                  type="submit"
                  value="Send"
                >
                  Submit
                </button>
              </form>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default Career;
