import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <section id="social-links" className="social-section">
      <h2 className="section-title">
        <span className="title-underline">Connect With Me</span>
      </h2>
      
      <div className="social-container">
        <a 
          href="https://github.com/Khushi523002" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card github-card"
        >
          <div className="social-icon">
            <FaGithub />
            <div className="icon-halo"></div>
          </div>
          <div className="social-content">
            <span>GitHub</span>
            <FaArrowRight className="arrow-icon" />
          </div>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/khushi-mehta-8b207a26b" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card linkedin-card"
        >
          <div className="social-icon">
            <FaLinkedin />
            <div className="icon-halo"></div>
          </div>
          <div className="social-content">
            <span>LinkedIn</span>
            <FaArrowRight className="arrow-icon" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;