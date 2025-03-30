import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
      
      // Show indicator when scrolling starts
      setIsScrolling(true);
      
      // Hide indicator after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`scroll-indicator ${isScrolling ? "visible" : ""}`}>
      <div 
        className="progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      >
        <div className="progress-knob"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;