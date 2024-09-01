import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">PhonePrice24.com</a>
        <a href="#">iFunny Downloader</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact us</a>
        <a href="#">About us</a>
        <a href="#">DMCA</a>
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
        This website is not an official Terabox website and we are not
        associated with terabox.app or Flextech Inc.
      </p>
      <p className="footer-copyright">
        © 2024 - Present TeraDownloader.com All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
