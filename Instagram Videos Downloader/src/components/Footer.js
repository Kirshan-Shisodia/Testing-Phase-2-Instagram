import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <NavLink to="/terms-condition">Terms & Conditions</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
        <NavLink to="/about-us">About us</NavLink>
      </div>
      <div className="footer-social">
        <a href="#" aria-label="Pinterest">
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Telegram">
          <i className="fab fa-telegram"></i>
        </a>
        <a href="#" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="footer-note">
        This website is an official website and we are not associated with any
        social media or Flextech Inc.
      </p>
      <p className="footer-copyright">
        © 2024 - Present{" "}
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          TheReelsDownloader.com
        </NavLink>{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
