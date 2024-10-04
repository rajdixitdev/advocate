import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.scss';
import Header from './pages/header';
import Footer from './pages/footer';
import ContactUs from './pages/contactUs';
import PractiseAreas from './pages/practiseAreas';
import AboutUs from './pages/aboutUs';
import Team from './pages/team';
import Career from './pages/career';
import DisclaimerDialog from './components/disclaimerDialog';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/practise-areas" element={<PractiseAreas />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <DisclaimerDialog />
      <a
        className="btnFixed"
        title="Click to get a help on whatsapp"
        href="https://web.whatsapp.com/send?phone=918882228043&text=Hello%20Lexwell%20Partners"
        aria-label="How can I help you?"
        target="_blank"
      >
        <img src="assets/icons/whatsapp.png" alt="" role="presentation" />
      </a>
    </Router>
  );
}

export default App;
