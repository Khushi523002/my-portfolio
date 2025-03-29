import React from "react";
import "./ContactMe.css";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" />  
            <a href="mailto:kdmehta2503@gmail.com">kdmehta2503@gmail.com</a>
          </p>
          <p>
            <FaPhone className="icon" />  
            <a href="tel:+919321765616">+91 93217 65616</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
