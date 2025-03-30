import React from "react";
import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Python for Data Science and Machine Learning Bootcamp",
    provider: "Udemy",
    year: "2024",
    icon: "🐍",
    highlight: "Mastered data analysis and ML algorithms"
  },
  {
    id: 2,
    title: "J.P. Morgan Chase & Co - Software Engineering Simulation",
    provider: "Forage",
    year: "2025",
    icon: "🏦",
    highlight: "Practiced real-world financial software development"
  },
  {
    id: 3,
    title: "Accenture - Advanced Engineering Simulation",
    provider: "Forage",
    year: "2025",
    icon: "🔧",
    highlight: "Gained enterprise-level coding experience"
  },
  {
    id: 4,
    title: "AWS Cloud Architecting",
    provider: "AWS",
    year: "2025",
    icon: "☁️",
    highlight: "Learned cloud infrastructure design"
  }
];

  /* Add this to your main JS file */
  const animateCourses = () => {
    const cards = document.querySelectorAll('.course-card');
    const triggerBottom = window.innerHeight * 0.85;
  
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', animateCourses);
  window.addEventListener('load', animateCourses);

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <h2 className="section-title">
        <span className="title-underline">Courses & Certifications</span>
      </h2>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div 
            key={course.id}
            className="course-card"
            style={{ transitionDelay: `${course.id * 0.1}s` }}
          >
            <div className="card-icon-container">
              <span className="card-icon">{course.icon}</span>
              <div className="icon-pulse"></div>
            </div>
            
            <div className="card-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-provider">{course.provider}</p>
              {course.highlight && (
                <p className="course-highlight">{course.highlight}</p>
              )}
              <span className="year-badge">{course.year}</span>
            </div>
            
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;