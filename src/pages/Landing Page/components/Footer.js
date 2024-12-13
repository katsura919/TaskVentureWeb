import React from "react";
import Contacts from "./Contacts";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Adventure awaits! Embark on a journey to conquer new challenges with us.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Contacts/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Moody Blues. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
