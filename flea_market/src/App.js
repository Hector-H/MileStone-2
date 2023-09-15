import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

// Components
import Home from './Components/Home.js';
import NavBar from './NavBar/NavBar.js';
import ProductWindow from './Product/ProductWindow.js';
// import SideBar from './components/SideBar/SideBar';
// import ProductCreate from './components/Product/ProductCreate.js';
// import ProductEdit from './components/Product/ProductEdit.js';
// import AboutUs from './components/SideBar/AboutUs';
// import ContactUs from './components/SideBar/ContactUs.js';
// import HelpPage from './components/SideBar/HelpPage.js';
// import Distance from './components/SideBar/Distance.js';
// import Category from './components/SideBar/Category.js';
// import Cart from './components/NavBar/Cart.js';
// import ProfilePage from './components/NavBar/ProfilePage.js';
// import ProductById from './components/Product/ProductById.js'
// import ProfileCreate from './components/Profile/ProfileCreate.js';
// import SearchResults from './components/NavBar/SearchResults.js';
// import ProductCard from './components/Product/ProductCard.js';

function App() {
  // const [seeds, setSeeds] = useState(productsSeed)

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        {/* <section>
        <nav>
            <Link to="/products/create">Create Product</Link>
            <Link to="/profiles/create">Create a Profile</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/HelpPage">Help Page</Link>
          <Routes>
            <Route path="/products" element={<ProductWindow />} />
          </Routes>
        </nav>
      </section> */}
        <main>
          <Container className='mt-3'>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductWindow />} />
            </Routes>
          </Container>
          {/* <Routes> */}
          {/* <Route path="/" element={<ProductWindow seeds={seeds} />} />
          <Route path="/ProductCard" element={<ProductCard />} />
          <Route path="/" element={<ProductWindow seeds={seeds} />} />
          <Route path="ProductWindow" element={<ProductWindow />} />
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
          <Route path="/products/create" element={<ProductCreate />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} /> */}
          {/* </Routes> */}
        </main>
        <footer>
          <div className="text-center">
            All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;