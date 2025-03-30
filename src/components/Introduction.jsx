import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="intro-text">
        <h1>
          Hello, I'm <span className="name-highlight">Khushi Mehta</span>! 👋
        </h1>
        <p className="intro-subtext">
          A passionate Computer Engineering student at Fr. Conceicao Rodrigues College of Engineering.
        </p>
        <button className="cozy-btn" onclick="location.href='#social-links'">
          Let's Connect 
          <span className="btn-icon">→</span>
        </button>
      </div>
      <div className="photo-container">
        <img 
          src="/myfoto.png" 
          alt="Khushi Mehta" 
          className="profile-photo"
        />
        <div className="photo-border"></div>
      </div>
    </section>
  );
};

export default Introduction;