import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Dashboard from "./components/dashboard";
import Products from "./components/products";
import Contact from "./components/contact";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <div className="App my-2">
      <div className="container ">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
