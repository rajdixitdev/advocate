import { Grid2 } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Grid2 container spacing={{ xs: 5 }}>
          <Grid2 item size={{ xs: 12, sm: 9, md: 8, lg: 6 }}>
            <Link to="/" className="logo-cover">
              <img src="assets/images/logo-golden.svg" alt="Logo" />
            </Link>
            <p className="mt-20 body2" style={{ lineHeight: 2 }}>
              Lexwell Partners is a dynamic and client-centric law firm
              representing clients across various legal forums. <br /> We are
              dedicated to delivering effective legal solutions tailored to meet
              the unique needs of each client.
            </p>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 3, md: 4, lg: 6 }} className="impLinks">
            <h4 className="heading4 mb-16 uppercase semi-bold">Company</h4>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/practise-areas">Practise Area</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }} className="copyrightStatement">
            <p className="regular body2">
              Copyright © 2024 LexwellPartners. All rights reserved.
            </p>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }} className="socialIconGrid">
            <div className="social-icons">
              <Link to="/">
                <img src="assets/icons/facebook-white.svg" alt="Facebook" />
              </Link>
              <Link to="/">
                <img src="assets/icons/twitter-white.svg" alt="Twitter" />
              </Link>
              <Link to="/">
                <img src="assets/icons/insta-white.svg" alt="Instagram" />
              </Link>
              <Link to="/">
                <img src="assets/icons/youtube-white.svg" alt="Youtube" />
              </Link>
            </div>
          </Grid2>
        </Grid2>
      </div>
    </footer>
  );
};

export default Footer;
