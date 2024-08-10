import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/Pricing';
import Projects from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage/>        
      </div>
    </Router>
  );
}

export default App;
