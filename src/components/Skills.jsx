import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React.js",
      icon: "🌐",
      color: "#8B5A2B" // Warm brown
    },
    {
      title: "Database",
      description: "PostgreSQL, Firebase, MongoDB",
      icon: "🗄️",
      color: "#6B7D6D" // Olive green
    },
    {
      title: "Backend",
      description: "Node.js, Express.js, Django",
      icon: "⚙️",
      color: "#A78A7F" // Muted brown
    },
    {
      title: "Android Development",
      description: "Java, Flutter, XML",
      icon: "📱",
      color: "#7E8E65" // Darker olive
    }
  ];

  useEffect(() => {
    const animateSkills = () => {
      const cards = document.querySelectorAll('.skill-card');
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Run once on load

    return () => {
      window.removeEventListener('scroll', animateSkills);
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span className="title-underline">Skills</span>
      </h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="skill-card"
            style={{ 
              '--skill-color': skill.color,
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <div className="skill-icon-container">
              <span className="skill-icon">{skill.icon}</span>
              <div className="icon-pulse"></div>
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-decoration"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;