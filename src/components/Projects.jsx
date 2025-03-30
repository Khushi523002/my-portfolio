import React, { useEffect } from "react";
import "./Projects.css";

// Tech stack logos
import pythonLogo from "./assets/python-removebg-preview.png";
import huggingFaceLogo from "./assets/hf.png";
import llamaLogo from "./assets/llama2_7de2e7d8dd-removebg-preview.png";
import googleColabLogo from "./assets/colab.png";
import htmlLogo from "./assets/htmlbg.png";
import cssLogo from "./assets/css.png";
import jsLogo from "./assets/js.png";
import nodeLogo from "./assets/nodejs.png";
import expressLogo from "./assets/ex.png";
import mongoDBLogo from "./assets/mongo.png";
import flutterLogo from "./assets/flutt.png";
import firebaseLogo from "./assets/fire.png";

const projects = [
  {
    title: "Yojana Guide",
    icon: "💡",
    description:
      "Developed a Government Schemes Chatbot using LLAMA 2 to answer queries about Indian government schemes.",
    techStack: [
      { name: "LLAMA 2", logo: llamaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Hugging Face", logo: huggingFaceLogo },
      { name: "Google Colab", logo: googleColabLogo },
    ],
  },
  {
    title: "Chaardham Yatra Navigator",
    icon: "📊",
    description:
      "Designed and developed an interactive website for Chaardham Yatra registration, allowing users to select from various yatra packages.",
    techStack: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongoDBLogo },
    ],
  },
  {
    title: "Expense Tracker",
    icon: "🛍️",
    description:
      "Developed a cross-platform Expense Tracker app with authentication, real-time database, budget management, and expense visualization.",
    techStack: [
      { name: "Flutter", logo: flutterLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    const animateProjects = () => {
      const cards = document.querySelectorAll('.project-card');
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateProjects);
    animateProjects(); // Run once on load

    return () => {
      window.removeEventListener('scroll', animateProjects);
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        <span className="title-underline">Projects</span>
      </h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="card-header">
              <span className="project-icon">{project.icon}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <div 
                  key={i}
                  className="tech-item"
                  data-tooltip={tech.name}
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="tech-logo"
                  />
                </div>
              ))}
            </div>
            
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
