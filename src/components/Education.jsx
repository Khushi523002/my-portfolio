import React, { useEffect } from "react";
import "./Education.css";

const Education = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".edu-card");

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
      <h2>Education</h2>
      <div className="edu-container">
        <div className="edu-card">
          <h4>Fr. Conceicao Rodrigues College of Engineering</h4>
          <p>B.E. Computer Engineering - SGPA: 8.78 (till Sem 5)</p>
          <span className="edu-year">2022 - Present</span>
        </div>

        <div className="edu-card">
          <h4>Shri. Tikamdas Purushottam Bhatia College of Science</h4>
          <p>HSC (IT) - 78.83%</p>
          <span className="edu-year">2020 - 2022</span>
        </div>

        <div className="edu-card">
          <h4>Dhanamal High School</h4>
          <p>SSC - 91.80%</p>
          <span className="edu-year">2020</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
