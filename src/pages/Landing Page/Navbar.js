import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
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
        </div>
        <div className="menu-icon">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
