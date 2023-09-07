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
import Home from './components/Home';
import ProductList from './components/Product/ProductList';
import ProductCreate from './components/Product/ProductCreate.js';
import AboutUs from './components/SideBar/AboutUs';
import ProductEdit from './components/Product/ProductEdit.js';


function App() {
const [seeds, setSeeds] = useState(productsSeed)

// Fetch products from productsSeed
// const FleaMarketAPI = () => {
//   fetch('productsSeed')
//     .then(res => res.json())
//     .then(json => {
//       setProducts(json)
//     })
// }

// useEffect(() => {
//   FleaMarketAPI()
// })

  return (
    <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/products/create">Create Product</Link></li>
              <li><Link to="/products/edit">Edit Product</Link></li>
            </ul>
          <Routes>
            <Route path="/" element={<SideBar />} />
            <Route path="/products" element={<SideBar />} />
          </Routes>
          </nav>
        </section>
        <main>
          <Routes>
            <Route path="/" element={<ProductWindow seeds = {seeds} />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/edit/:id" element={<ProductEdit />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
