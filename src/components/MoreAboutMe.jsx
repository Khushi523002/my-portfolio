import React from "react";
import "./MoreAboutMe.css";

const MoreAboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">
          <span className="title-decoration">About Me</span>
        </h2>
        <div className="about-card">
          <p className="about-text">
            Passionate about continuous learning and growth, I strive to contribute to organizational development through
            effective learning initiatives, while honing my skills, broadening my knowledge, and fostering innovative ideas for
            meaningful impact.
          </p>
          <div className="interactive-elements">
            <div className="cozy-dot"></div>
            <div className="cozy-dot"></div>
            <div className="cozy-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;