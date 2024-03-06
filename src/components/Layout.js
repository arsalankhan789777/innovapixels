import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const imageUrls = ['url1', 'url2', 'url3']; // Replace with your image URLs
    setTotalImages(imageUrls.length);

    const loadImage = (url) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.src = url;
    };

    function handleImageLoad() {
      setLoadedImages((prev) => prev + 1);
    }

    // Load images
    imageUrls.forEach(loadImage);

    return () => {
      // Cleanup if needed
    };
  }, []);

  useEffect(() => {
    // Calculate loading progress based on loaded images
    const progress = (loadedImages / totalImages) * 100;
    setLoading(progress);

    // If all images are loaded, reset the loading state
    if (progress === 100) {
      setTimeout(() => {
        setLoading(0);
      }, 500); // Add a delay before resetting to visually indicate completion
    }
  }, [loadedImages, totalImages]);

  return (
    <div>
      <LoadingBar progress={loading} height={3} color="#f11946" onLoaderFinished={() => setLoading(0)} />
      {children}
    </div>
  );
};

export default Layout;
