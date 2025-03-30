import React, { useState, useEffect } from "react";
import "./Education.css";

const Education = () => {
  const [activeCard, setActiveCard] = useState(null);

  const educationData = [
    {
      id: 1,
      institution: "Fr. Conceicao Rodrigues College of Engineering",
      degree: "B.E. Computer Engineering - SGPA: 8.78 (till Sem 5)",
      year: "2022 - Present",
      icon: "🎓"
    },
    {
      id: 2,
      institution: "Shri. Tikamdas Purushottam Bhatia College of Science",
      degree: "HSC (IT) - 78.83%",
      year: "2020 - 2022",
      icon: "📚"
    },
    {
      id: 3,
      institution: "Dhanamal High School",
      degree: "SSC - 91.80%",
      year: "2020",
      icon: "🏫"
    }
  ];

  useEffect(() => {
    const animateEducation = () => {
      const cards = document.querySelectorAll('.edu-card');
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateEducation);
    animateEducation(); // Run once on load

    return () => {
      window.removeEventListener('scroll', animateEducation);
    };
  }, []);

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">
        <span className="title-underline">My Education</span>
      </h2>
      
      <div className="timeline">
        {educationData.map((edu) => (
          <div 
            key={edu.id}
            className={`edu-card ${activeCard === edu.id ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(edu.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-icon">{edu.icon}</div>
            <div className="card-content">
              <h3 className="institution">{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <span className="year-badge">{edu.year}</span>
            </div>
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;