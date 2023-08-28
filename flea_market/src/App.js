// Dependencies
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Home from './components/Home.js';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import ProductWindow from './components/ProductWindow';


function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <NavBar />
        <SideBar />
        <ProductWindow />
      </Router>
    </div>
  );
}

export default App;
