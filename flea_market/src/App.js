// Dependencies

// import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import productsSeed from './SeedData/Product_Seed.js';



// Components
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import ProductWindow from './components/Product/ProductWindow';
import ProductCard from './components/Product/ProductCard.js';







//setSeeds
function App() {
  const [seeds, setSeeds] = useState(productsSeed)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section>
        <nav>
          <Routes>
            <Route path="/" element={<SideBar />} />
          </Routes>
        </nav>
      </section>
      <section>
      <body>
        <center>
      <Routes>
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/" element={<ProductWindow seeds={seeds} />} />
        <Route path="ProductWindow" element={<ProductWindow />} />
        </Routes>
        </center>
      </body>
      </section>
    </div>
  );
}


export default App;
