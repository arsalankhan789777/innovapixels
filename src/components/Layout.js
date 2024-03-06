// Layout.js
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import LoadingBar from './LoadingBar';

const Layout = ({ children }) => {
  const loadingBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Reset loading bar on each navigation
    loadingBarRef.current.complete();
    loadingBarRef.current.continuousStart();
  }, [location.pathname]); // Trigger on route change

  useEffect(() => {
    // Intercept AJAX requests and update loading bar
    const axiosInterceptor = axios.interceptors.request.use((config) => {
      loadingBarRef.current.increase(5); // Adjust the increment value
      return config;
    });

    // Set up a cleanup function
    return () => {
      axios.interceptors.request.eject(axiosInterceptor);
    };
  }, []); // Run only once when component mounts

  return (
    <div>
      <LoadingBar ref={loadingBarRef} height={3} color="#f11946" onLoaderFinished={() => loadingBarRef.current.complete()} />
      {children}
    </div>
  );
};

export default Layout;
