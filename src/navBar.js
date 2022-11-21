import React from "react";
import { Link, NavLink } from "react-router-dom";
import Products from "./components/products";

function NavBar() {
  return (
    <ul className="nav nav-pills my-2">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/aboutus">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
