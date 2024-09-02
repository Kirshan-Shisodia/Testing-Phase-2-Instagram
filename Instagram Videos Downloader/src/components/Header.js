import React, { useState } from "react";
import "../styles/Header.css";
import Logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="Tera Downloader Logo" className="logo-image" />
          </NavLink>
        </div>
        <div
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Instagram Reels</NavLink>
            </li>
            <li>
              <NavLink to="/facebook">Facebook Reels</NavLink>
            </li>
            <li>
              <NavLink to="/terabox">Terabox Videos</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/pp">Privacy Policy</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

// import React, { useState } from "react";
// import "../styles/Header.css";
// import Logo from "../Images/Logo.png";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import Facebook from "../pages/Facebook.js";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <img src={Logo} alt="Tera Downloader Logo" className="logo-image" />
//         </div>
//         <div
//           className={`nav-toggle ${isOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
//           <ul className="nav-links">
//             <li>
//               <NavLink to="/"><a href="/">Instagram Reels</a></NavLink>
//             </li>
//             <li>
//               <a href="/facebook">Facebook Reels</a>
//             </li>
//             <li>
//               <a href="/terabox">Terabox Videos</a>
//             </li>
//             <li>
//               <a href="/contact">Contact us</a>
//             </li>
//             <li>
//               <a href="/about">About us</a>
//             </li>
//             <li>
//               <a href="/pp">Privacy Policy</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
