// Dependencies
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'


// Components
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import ProductWindow from './components/Product/ProductWindow';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/product/:name" element={<NavBar />} />
          </Routes>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<SideBar />} />
            <Route path="/product/:name" element={<SideBar />} />
          </Routes>
        </section>
        <main>
          <Routes>
            <Route path="/" element={<ProductWindow />} />
            <Route path="/product/:name" element={<ProductWindow />} />
          </Routes>
          <ProductWindow />
        </main>
      </div>
    </Router>
  );
}

export default App;
