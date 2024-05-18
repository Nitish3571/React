import React from 'react';
import Header from './Header/Header';
import Home from './Home';
import Service from './Service';
import AboutUs from './AboutUs';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// bg-slate-800 h-screen
function Navigation() {
  return (

      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/about-us" element={<AboutUs />}/>
      </Routes>
    </Router>

  );
}

export default Navigation;