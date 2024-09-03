import React from "react";
import "../styles/ContactUs.css";
// import CartoonImage from "../Images/cartoon.png"; // Ensure you have this image in your project

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-container">
        <div className="contact-left">
          <img
            // src={CartoonImage}
            alt="Cartoon Animation"
            className="cartoon-image"
          />
        </div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
