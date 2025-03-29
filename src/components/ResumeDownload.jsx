import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
  return (
    <div id="container2">
        <section id="resume" className="resume-section">
        <h2>Download My Resume</h2>
        <a href="/resume.pdf" download className="resume-btn">
            <FaDownload /> Download Resume (PDF)
        </a>
        </section>
    </div>

  );
};

export default ResumeDownload;
