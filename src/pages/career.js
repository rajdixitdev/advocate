import { Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Career = () => {

  const form = useRef();
  const sendApplication = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7deluxr', 'template_8dvq0tj', form.current, {
        publicKey: 'U7WnAp5maYKSwm1Qj',
      })
      .then(
        () => {
          alert('Form Submitted Successfully!');
        },
        () => {
          alert('Error! Please fill the form in correct format.');
        }
      );
  };

  return (
    <div className="page-career page-contact-us">
      <div className="container">
        <h1 className="heading1 mb-30 center">Career</h1>
        <p className="body2 subtext mb-60 mb-md-40 mb-sm-30 mb-xs-20 center">
        We always appreciate new talents who are dedicated and motivated by the prospect of doing their best work everyday.<br />
        We strive to embody the following ideals in everything we do.
        </p>

        <div className="contact-content">
          <Grid2 container>
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
                  <label for="resume">Upload Your Resume on Lexwellpartners@gmail.com</label>
                </div>
                <button className="btn btn-primary mt-20" type="submit" value="Send">
                  Submit
                </button>
              </form>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <div className="contact-info">
                <h2 className="heading2 mb-15">Contact Information</h2>

                <ul>
                  <li>
                    <Link to="tel:2937823" type="tel" className="white" target='_blank'>
                      <CallOutlinedIcon className="white mr-20" />+ 23928
                      2839283
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:hello@nowcrowd.app"
                      type="mail"
                      className="white"
                      target='_blank'
                    >
                      <EmailOutlinedIcon className="white mr-20" />{' '}
                      dkawue@iduawe.coa
                    </Link>
                  </li>
                  <li>
                    <Link to="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003" type="mail" className="white"
                    target='_blank'>
                      <LocationOnOutlinedIcon className="white mr-20" />
                      250 Contact Address here 250 Contact Address here 250
                      Contact Address here
                    </Link>
                  </li>
                  <li>
                  <h2 className="heading2 mt-10">You can also follow us on:</h2>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img src="assets/icons/facebook-white.svg" alt="Facebook" className='mr-20' />
                      facebook@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img src="assets/icons/twitter-white.svg" alt="Youtube" className='mr-20' />
                      twitter@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img src="assets/icons/insta-white.svg" alt="Instagram" className='mr-20' />
                      instagram@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img src="assets/icons/youtube-white.svg" alt="Youtube" className='mr-20' />
                      youtube@LexwellPartners
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default Career;
