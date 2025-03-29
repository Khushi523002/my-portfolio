import React, { useEffect, useRef } from "react";
import "./Skills.css";


const skills = [
  {
    title: "Web Development",
    description:
      "HTML, CSS, JavaScript, React.js",
  },
  {
    title: "Database",
    description:
      "PostgreSQL, Firebase, MongoDB",
  },
  {
    title: "Backend",
    description:
      "Node.js, Express.js, Django",
  },
  {
    title: "Android Development",
    description:
      "Java, Flutter, XML",
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight * 0.8;

      if (sectionTop < windowHeight) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skills, index) => (
          <div key={index} className="skill-card">
            <h3>{skills.title}</h3>
            <p>{skills.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="section-content">
        <div id="skill-text">
          <p>Web Development: HTML, CSS, JavaScript, React.js</p>
        </div>
        <div id="skill-text">
          <p>Database: PostgreSQL, Firebase, MongoDB</p>
        </div>
        <div id="skill-text">
          <p>Backend: Node.js, Express.js, Django</p>
        </div>
        <div id="skill-text">
          <p>Android Development: Java, Flutter, XML</p>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
