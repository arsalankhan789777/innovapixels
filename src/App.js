import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Services from "./Services";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import React from "react";


const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}



export default App