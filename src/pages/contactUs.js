import { Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7deluxr', 'template_v6q9i3q', form.current, {
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
    <div className="page-contact-us">
      <div className="container">
        <h1 className="heading1 mb-30 center">Contact Us</h1>
        <p className="body2 subtext mb-60 mb-md-40 center">
          Lexwell Partners is a dynamic and client-centric law firm representing
          clients across various legal forums. <br /> We are dedicated to
          delivering effective legal solutions tailored to meet the unique needs
          of each client.
        </p>

        <div className="contact-content">
          <Grid2 container>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <form ref={form} onSubmit={sendEmail}>
                <h2 className="heading2 mb-20">Send us a Message</h2>
                <div className="form-group mb-20">
                  <label>Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="fullName"
                    placeholder="Ex: John Doe"
                  />
                </div>
                <div className="form-group mb-20">
                  <label>Email</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Ex: john@email.com"
                  />
                </div>
                <div className="form-group mb-20">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    name="phone"
                    placeholder="Ex: 99XXX XXXXX"
                  />
                </div>

                <div className="form-group mb-20">
                  <label>Message</label>
                  <textarea
                    rows="4"
                    required
                    className="form-control"
                    name="message"
                    placeholder="Enter your message here..."
                  ></textarea>
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
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <div className="contact-info">
                <h2 className="heading2 mb-15">Contact Information</h2>

                <ul>
                  <li>
                    <Link
                      to="tel:3423492"
                      type="tel"
                      className="white"
                      target="_blank"
                    >
                      <CallOutlinedIcon className="white mr-20" />+ 23928
                      2839283
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:contact@lexwellpartners.com"
                      type="mail"
                      className="white"
                      target="_blank"
                    >
                      <EmailOutlinedIcon className="white mr-20" />{' '}
                      contact@lexwellpartners.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://maps.app.goo.gl/qtXMgGoEHJZzVZ6U7"
                      className="white"
                      target="_blank"
                    >
                      <LocationOnOutlinedIcon className="white mr-20" />
                      D-9, Ground Floor, Jangpura Extension, Delhi - 110014
                    </Link>
                  </li>
                  <li>
                    <h2 className="heading2 mt-10">
                      You can also follow us on:
                    </h2>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img
                        src="assets/icons/facebook-white.svg"
                        alt="Facebook"
                        className="mr-20"
                      />
                      facebook@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img
                        src="assets/icons/twitter-white.svg"
                        alt="Youtube"
                        className="mr-20"
                      />
                      twitter@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img
                        src="assets/icons/insta-white.svg"
                        alt="Instagram"
                        className="mr-20"
                      />
                      instagram@LexwellPartners
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="white">
                      <img
                        src="assets/icons/youtube-white.svg"
                        alt="Youtube"
                        className="mr-20"
                      />
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

export default ContactUs;
