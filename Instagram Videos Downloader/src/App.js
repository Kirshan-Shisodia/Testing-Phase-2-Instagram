import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Facebook from "./pages/Facebook";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs.js";
import Terabox from "./pages/Terabox.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/terabox" element={<Terabox />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
