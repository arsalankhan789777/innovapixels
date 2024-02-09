import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS file for styling

const TopLoadingBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating an async operation (e.g., API request)
    const fakeAsyncOperation = async () => {
      setLoading(true);

      // Simulate a delay (you can replace this with your actual async operation)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setLoading(false);
    };

    // Call the fakeAsyncOperation function
    fakeAsyncOperation();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className={`top-loading-bar ${loading ? 'visible' : ''}`}>
      <div className="progress" />
    </div>
  );
};

export default TopLoadingBar;
