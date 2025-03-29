import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div id="container2">
        <section id="social-links" className="social-section">
        <h2>Connect with Me</h2>
        <div className="social-buttons">
            <a href="https://github.com/Khushi523002" target="_blank" rel="noopener noreferrer" className="social-btn github">
            <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/khushi-mehta-8b207a26b" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <FaLinkedin /> LinkedIn
            </a>
        </div>
        </section>
    </div>

  );
};

export default SocialLinks;
