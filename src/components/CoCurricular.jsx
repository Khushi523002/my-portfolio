import React from "react";
import "./CoCurricular.css";

const activities = [
  {
    id: 1,
    title: "Public Relations Head | TEDxCRCE",
    year: "2024-2025",
    icon: "🎤",
    highlight: "Managed speaker relations and event publicity"
  },
  {
    id: 2,
    title: "Jr. Event Head | ACM CRCE",
    year: "2023-2024",
    icon: "📅",
    highlight: "Organized tech events and workshops"
  },
  {
    id: 3,
    title: "Hackathon Participant - SIH'24 Finalist",
    year: "2024",
    icon: "💻",
    highlight: "Developed innovative solutions for real-world problems"
  }
];

  /* Add this to your main JS file */
  const animateCoCurricular = () => {
    const cards = document.querySelectorAll('.cocur-card');
    const triggerBottom = window.innerHeight * 0.85;
  
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', animateCoCurricular);
  window.addEventListener('load', animateCoCurricular);

const CoCurricular = () => {
  return (
    <section id="co-curricular" className="cocur-section">
      <h2 className="section-title">
        <span className="title-underline">Co-Curricular Activities</span>
      </h2>
      
      <div className="cocur-timeline">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="cocur-card"
            style={{ transitionDelay: `${activity.id * 0.1}s` }}
          >
            <div className="card-icon-container">
              <span className="card-icon">{activity.icon}</span>
              <div className="icon-pulse"></div>
            </div>
            
            <div className="card-content">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-highlight">{activity.highlight}</p>
              <span className="year-badge">{activity.year}</span>
            </div>
            
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoCurricular;