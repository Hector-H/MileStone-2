// Dependencies
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import ProductWindow from './components/Product/ProductWindow';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <SideBar />
          <ProductWindow />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
