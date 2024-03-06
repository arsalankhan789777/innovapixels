// src/CustomProgressBar.js
import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { useLocation } from 'react-router-dom';

const CustomProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate loading progress (replace this with your actual loading logic)
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [location.pathname, progress]);

  return (
    <ProgressBar
      percent={progress}
      autoIncrement
      spinner="right"
      style={{ backgroundColor: '#4CAF50', height: '5px' }}
    />
  );
};

export default CustomProgressBar;
