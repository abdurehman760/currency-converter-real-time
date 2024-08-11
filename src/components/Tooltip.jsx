import React, { useState, useEffect, useRef } from 'react';
import './Tooltip.css'; // Import CSS styles

const Tooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="tooltip-container" onClick={() => setIsVisible(!isVisible)}>
      <div className="info-icon">i</div>
      {isVisible && (
        <div className="tooltip-text" ref={tooltipRef}>
          <div className="tooltip-close" onClick={() => setIsVisible(false)}>
            ×
          </div>
          <h4>About the App</h4>
          <p>Welcome to our Currency Converter App!</p>
          <ul>
            <li>Easily convert different currencies.</li>
            <li>Built with React and real-time exchange rates.</li>
          </ul>
          <h4>About the Developer</h4>
          <p>This project is developed by <strong>Abdur Rahman</strong>.</p>
          <p>For more details, visit my <a href="https://github.com/abdurehman760" target="_blank" rel="noopener noreferrer">GitHub</a> or <a href="https://InDevelopment.com" target="_blank" rel="noopener noreferrer">Website</a>.</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
