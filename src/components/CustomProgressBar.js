// src/CustomProgressBar.js
import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { useLocation } from 'react-router-dom';

const CustomProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handlePageLoad = () => {
      setProgress(100);

      // Optionally, you can add additional logic here
      // For example, hide the progress bar or perform other actions
    };

    window.addEventListener('load', handlePageLoad);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('load', handlePageLoad);
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
