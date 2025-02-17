
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import News from "./pages/News";  
import Hot from "./pages/Hot";    
import About from "./pages/About"; 
import ContactUs from "./pages/ContactUs"; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
