import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Dashboard from "./components/Dashboard/dashboard";
import Products from "./components/products";
import Contact from "./components/contact";
import AboutUs from "./components/aboutUs";
import Product from "./components/product";
import Footer from "./components/Footer/footer";
import TopBar from "./components/topBar";
import BottomBar from "./components/Footer/bottomBar";
import DisplayCartProducts from "./components/displayCartProducts";
import Checkout from "./components/Checkout/checkout";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <TopBar />
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<DisplayCartProducts />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
          <BottomBar />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
