import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src="/path-to-your-logo.png"
            alt="Tera Downloader Logo"
            className="logo-image"
          />
          <span>Tera Downloader</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ifunny">iFunny Video Downloader</a>
            </li>
            <li>
              <a href="/join-telegram">Join Telegram</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/dmca">DMCA</a>
            </li>
          </ul>
        </nav>
        <div className="language-switcher">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
