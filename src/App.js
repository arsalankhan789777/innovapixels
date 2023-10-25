import React from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";  // Change here
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
// ... (Other commented imports)

const App = () => {
  return (
    <Router>  {/* Router is now HashRouter */}
      {/* Other chatbot components */}
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
