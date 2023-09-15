import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

// Components
import Home from './Components/Home.js';
import NavBar from './NavBar/NavBar.js';
import ProductWindow from './Product/ProductWindow.js';

// SideBar
import SideBar from './SideBar/SideBar.js';
import AboutUs from './SideBar/AboutUs.js';
import ContactUs from './SideBar/ContactUs.js';
import HelpPage from './SideBar/HelpPage.js';
import Distance from './SideBar/Distance.js';
import Category from './SideBar/Category.js';

//CRUD Routes
import ProductCreate from './Product/ProductCreate.js';
import ProductEdit from './Product/ProductEdit.js';

// import Cart from './components/NavBar/Cart.js';
// import ProfilePage from './components/NavBar/ProfilePage.js';
// import ProductById from './components/Product/ProductById.js'
// import ProfileCreate from './components/Profile/ProfileCreate.js';
// import SearchResults from './components/NavBar/SearchResults.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <section>
          <SideBar />
        </section>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductWindow />} />

              {/* SideBar Routes */}
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/HelpPage" element={<HelpPage />} />
              <Route path="/Distance" element={<Distance />} />
              <Route path="/Category" element={<Category />} />

              {/* CRUD Routes */}
              <Route path="/ProductCreate" element={<ProductCreate />} />
              <Route path="/ProductEdit/:id" element={<ProductEdit />} />
            </Routes>
          </Container>
          {/* <Routes> */}
          {/* <Route path="/" element={<ProductWindow seeds={seeds} />} />
              <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ProductCard" element={<ProductCard />} />
          <Route path="/" element={<ProductWindow seeds={seeds} />} />
          <Route path="ProductWindow" element={<ProductWindow />} />
          <Route path="/HelpPage" element={<HelpPage />} />
          <Route path="/Distance" element={<Distance />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/products/:id" element={<ProductById />} />
          <Route path="/profiles/create" element={<ProfileCreate />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/create" element={<ProductCreate />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} /> */}
          {/* </Routes> */}
        </main>
        <footer className="footer">
          <div className="text-center">
            All Rights Reserved. &copy; 2023
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;