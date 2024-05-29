// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';  
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />  
      <Contact />
    </div>
  );
}

export default App;
