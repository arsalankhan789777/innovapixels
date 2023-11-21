// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserHistory } from 'history';
import './index.css';

const App = () => {
  const history = createBrowserHistory();

  useEffect(() => {
    const removeHash = () => {
      if (window.location.hash === '#/') {
        const newURL = window.location.href.replace(/#.*/, '');
        window.history.replaceState({}, document.title, newURL);
      }
    };

    removeHash(); // Remove hash on initial load
    const unlisten = history.listen(() => {
      removeHash(); // Remove hash when routes change
    });

    return () => {
      unlisten(); // Clean up history listener
    };
  }, [history]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
