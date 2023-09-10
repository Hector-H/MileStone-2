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
      <main>
      <Routes>
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/" element={<ProductWindow seeds={seeds} />} />
        </Routes>
      </main>

    </div>
  );
}


export default App;
