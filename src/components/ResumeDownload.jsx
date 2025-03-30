import React from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import "./ResumeDownload.css";

const ResumeDownload = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">
        <span className="title-underline">My Professional Profile</span>
      </h2>
      
      <div className="resume-container">
        <a 
          href="/resume.pdf" 
          download 
          className="resume-card"
        >
          <div className="resume-icon">
            <FaDownload />
            <div className="icon-halo"></div>
          </div>
          <div className="resume-content">
            <span>Download Resume</span>
            <div className="file-details">
              <span className="file-type">PDF</span>
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ResumeDownload;