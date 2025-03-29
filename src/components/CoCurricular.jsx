import React, { useEffect } from "react";
import "./CoCurricular.css";


const CoCurricular = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".cocur-card");

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
    <section id="co-curricular">
      <h2>Co-Curricular Activities</h2>
      <div className="cocur-container">
        <div className="cocur-card">
          <h4>Public Relations Head | TEDxCRCE</h4>
          <span className="year">2024-2025</span>
        </div>
      </div>

      <div className="cocur-container">
        <div className="cocur-card">
          <h4>Jr. Event Head | ACM CRCE</h4>
          <span className="year">2023-2024</span>
        </div>
      </div>

      <div className="cocur-container">
        <div className="cocur-card">
          <h4>Hackathon Participant - SIH'24 Finalist</h4>
          <span className="year">2024</span>
        </div>
      </div>
    </section>
  );
};

export default CoCurricular;