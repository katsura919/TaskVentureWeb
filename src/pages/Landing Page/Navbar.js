import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import RateButton from '../Landing Page/components/RateButton';
import './Navbar.css'; // Ensure this matches your CSS file path

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Distance scrolled from the top
    setIsScrolled(scrollTop > 50); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false); // State to toggle modal

  // Function to open/close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src= {logo}
            alt="Business Illustration"
            className="logo"
          />
        </div>
        <div className="navbar-links">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#contact" className="nav-link">CONTACT</a>
          <div><RateButton/></div>
        </div>
        <div className="menu-icon" onClick={toggleModal}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ul className="menu-links">
              <li>
                <a href="#home" onClick={toggleModal}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleModal}>
                  About
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleModal}>
                  Contact
                </a>
              </li>
              <li>
                 <div><RateButton/></div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
