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
import ProductCreate from './components/Product/ProductCreate.js';
import ProductEdit from './components/Product/ProductEdit.js';
import AboutUs from './components/SideBar/AboutUs';
import ContactUs from './components/SideBar/ContactUs.js';
import HelpPage from './components/SideBar/HelpPage.js';
import Distance from './components/SideBar/Distance.js';
import Category from './components/SideBar/Category.js';
import Cart from './components/NavBar/Cart.js';
import ProfilePage from './components/NavBar/ProfilePage.js';
import ProductById from './components/Product/ProductById.js'
import ProfileCreate from './components/Profile/ProfileCreate.js';
import SearchResults from './components/NavBar/SearchResults.js';
import ProductCard from './components/Product/ProductCard.js';

function App() {
  const [seeds, setSeeds] = useState(productsSeed)

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
            <li><Link to="/profiles/create">Create a Profile</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<SideBar />} />
            <Route path="/products" element={<SideBar />} />
          </Routes>
        </nav>
      </section>
      <main>
        <Routes>
          <Route path="/" element={<ProductWindow seeds={seeds} />} />
          <Route path="/products/create" element={<ProductCreate />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/HelpPage" element={<HelpPage />} />
          <Route path="/Distance" element={<Distance />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/products/:id" element={<ProductById />} />
          <Route path="/profiles/create" element={<ProfileCreate />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/ProdcutCard" element={<ProductCard/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;