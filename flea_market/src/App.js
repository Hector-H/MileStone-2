// Dependencies
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Home from './components/Home.js';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <SearchBar />
      </Router>
    </div>
  );
}

export default App;
