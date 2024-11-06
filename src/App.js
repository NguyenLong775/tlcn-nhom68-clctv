import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import Checkout from './components/Checkout';
import Store from './components/Store';
import Blank from './components/Blank';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blank" element={<Blank />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
