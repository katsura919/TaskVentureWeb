import React, { useState, useEffect } from 'react';
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
        <a href="#home" className="nav-link">ADVENTURE GAMES</a>
        </div>
        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
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
