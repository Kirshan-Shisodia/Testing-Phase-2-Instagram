import React from "react";
// import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  return (
    <select className="language-switcher">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      {/* Add more languages as needed */}
    </select>
  );
}

export default LanguageSwitcher;
