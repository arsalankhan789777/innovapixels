import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Services from "./Services";
import News from "./News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import React from "react";


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/About" element={<About />} />
      <Route path="/News" element={<News />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}



export default App