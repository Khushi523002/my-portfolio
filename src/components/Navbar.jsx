import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside or on right side of screen
  useEffect(() => {
    const handleClick = (e) => {
      if (isOpen && (e.clientX > window.innerWidth * 0.7 || !menuRef.current.contains(e.target))) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <nav>
      <h1>Khushi Mehta</h1>

      <button 
        className="hamburger" 
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <ul 
        ref={menuRef}
        className={`nav-menu ${isOpen ? "active" : ""}`}
      >
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;