// Dependencies
import './App.css';
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'


// Components
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import ProductWindow from './components/Product/ProductWindow';
import Home from './components/Home';


function App() {
const [products, setProducts] = useState([])
	let [data, setData] = useState([])

// Fetch products from productsSeed
const FleaMarketAPI = () => {
  fetch(productsSeed)
    .then(res => res.json())
    .then(json => {
      setProducts(json)
    })
}

useEffect(() => {
  FleaMarketAPI()
})

  return (
    <Router>
    <Home />
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
