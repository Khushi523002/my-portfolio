import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="progress-bar" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;
