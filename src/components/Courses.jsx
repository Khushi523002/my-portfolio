import React, { useEffect } from "react";
import "./Courses.css";

const Courses = () => {

    useEffect(() => {
      const cards = document.querySelectorAll(".course-card");
  
      const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;
  
        cards.forEach((card) => {
          const cardTop = card.getBoundingClientRect().top;
          if (cardTop < triggerBottom) {
            card.classList.add("show");
          }
        });
      };
  
      window.addEventListener("scroll", checkVisibility);
      checkVisibility(); // Run on load
  
      return () => {
        window.removeEventListener("scroll", checkVisibility);
      };
    }, []);

  return (

    <section id="education">
      <h2>Courses</h2>
      <div className="edu-container">
        <div className="edu-card">
          <h4>Python for Data Science and Machine Learning Bootcamp</h4>
          <p>Udemy</p>
          <span className="edu-year">2024</span>
        </div>

        <div className="edu-card">
          <h4>J. P. Morgan Chase & Co - Software Engineering Job Simulation</h4>
          <p>Forage</p>
          <span className="edu-year">2025</span>
        </div>

        <div className="edu-card">
          <h4>Accenture North America - Coding: Development & Advanced Engineering Job Simulation</h4>
          <p>Forage</p>
          <span className="edu-year">2025</span>
        </div>

        <div className="edu-card">
          <h4>AWS Cloud Architecting</h4>
          <p>AWS</p>
          <span className="edu-year">2025</span>
        </div>
      </div>
    </section>

    // <section id="courses" className="section-container" ref={sectionRef}>
    //   <h2>Courses & Certifications</h2>
    //   <div className="section-content">
    //     <p>Python for Data Science and Machine Learning Bootcamp - Udemy</p>
    //     <p>J. P. Morgan Chase & Co - Software Engineering Job Simulation - Forage</p>
    //     <p>Accenture North America - Coding: Development & Advanced Engineering Job Simulation - Forage</p>
    //   </div>
    // </section>
  );
};

export default Courses;