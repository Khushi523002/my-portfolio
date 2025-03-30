import React from "react";
import "./ContactMe.css";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="title-underline">Get In Touch</span>
        </h2>
        
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
              <div className="icon-halo"></div>
            </div>
            <a 
              href="mailto:kdmehta2503@gmail.com" 
              className="contact-link"
            >
              kdmehta2503@gmail.com
              <span className="send-icon">
                <FaPaperPlane />
              </span>
            </a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone />
              <div className="icon-halo"></div>
            </div>
            <a 
              href="tel:+919321765616" 
              className="contact-link"
            >
              +91 93217 65616
              <span className="call-icon">📞</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;