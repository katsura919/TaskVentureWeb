import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#games" className="nav-link">
            TASKVENTURE
          </a>

        {/* Desktop Links */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#games" className="nav-link">
            Games
          </a>
          <a href="#news" className="nav-link">
            News
          </a>
          <a href="#support" className="nav-link">
            Support
          </a>
          <a href="#careers" className="nav-link">
            Careers
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`burger ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
