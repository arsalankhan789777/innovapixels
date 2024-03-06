// src/CustomProgressBar.js
import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { useLocation } from 'react-router-dom';

const CustomProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const calculatePageLoadProgress = () => {
      const { timing } = window.performance;

      if (timing.loadEventEnd > 0) {
        // Page has finished loading
        setProgress(100);
      } else {
        // Page is still loading, calculate progress based on current time
        const currentTime = new Date().getTime();
        const totalLoadTime = timing.loadEventEnd - timing.navigationStart;
        const elapsedLoadTime = currentTime - timing.navigationStart;

        const newProgress = Math.min((elapsedLoadTime / totalLoadTime) * 100, 99);
        setProgress(newProgress);
      }
    };

    // Attach the listener for page load progress
    window.addEventListener('load', calculatePageLoadProgress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('load', calculatePageLoadProgress);
    };
  }, [location.pathname]);

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
