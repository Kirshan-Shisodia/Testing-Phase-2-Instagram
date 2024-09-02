import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Facebook from "./pages/Facebook";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs.js";
import Terabox from "./pages/Terabox.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Layout from "./components/Layout.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/terabox" element={<Terabox />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
