import React from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
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
  )
}

export default App;
