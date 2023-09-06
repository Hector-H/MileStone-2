// Dependencies
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
// import { productsSeed } from './SeedData/Product_Seed.js';

// Components
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import ProductWindow from './components/Product/ProductWindow';
import Home from './components/Home';
import ProductList from './components/Product/ProductList';
import ProductForm from './components/Product/ProductForm';


function App() {
const [products, setProducts] = useState([])
	let [data, setData] = useState([])

// Fetch products from productsSeed
const FleaMarketAPI = () => {
  fetch('http://localhost:3000/products')
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
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<SideBar />} />
            <Route path="/products" element={<SideBar />} />
          </Routes>
        </section>
        <main>
          <Routes>
            <Route path="/" element={<ProductWindow />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<ProductForm />} />
            <Route path="/products/edit/:id" element={<ProductForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
