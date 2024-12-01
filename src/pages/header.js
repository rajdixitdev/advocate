import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header>
      <div className="container justify-center">
        <Link to="/" className="logo-cover">
          <img src="assets/images/logo.svg" alt="Logo" />
        </Link>
        <ul className="nav-list flex-start for-desktop">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/our-team">Our Team</Link>
          </li>
          <li>
            <Link to="/practice-areas">Practice Areas</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
        <Link className="btn btn-primary for-desktop" to="/contact-us">
          Contact Us
        </Link>
        <IconButton
          aria-label="open menu"
          size="small"
          onClick={toggleDrawer(true)}
          className="hamburger-icon for-mobile flex-center"
        >
          <MenuOpenIcon className="black" fontSize="medium" />
        </IconButton>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor="right"
          className="our-drawer"
        >
          <div className="justify-end">
            <IconButton
              aria-label="close menu"
              size="small"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon className="black" fontSize="medium" />
            </IconButton>
          </div>

          <ul className="nav-list flex-start">
            <li>
              <Link to="/about-us" onClick={toggleDrawer(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-team" onClick={toggleDrawer(false)}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/practice-areas" onClick={toggleDrawer(false)}>
                Practice Areas
              </Link>
            </li>
            <li>
              <Link to="/career" onClick={toggleDrawer(false)}>
                Career
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-primary white center mt-10"
                to="/contact-us"
                onClick={toggleDrawer(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
