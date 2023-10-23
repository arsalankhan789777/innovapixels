import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
// import { HashRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import React from "react";
// import { Chatbot } from "react-chatbot-kit";
// import config from "./components/chatbos/chatbotConfig";
// import MessageParser from "./components/chatbos/MessageParser";
// import ActionProvider from "./components/chatbos/ActionProvider";
// import 'react-chatbot-kit/build/main.css'

const App = () => {
  return (
    <Router>
    {/* <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> */}
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



export default App