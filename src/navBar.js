import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Products from "./components/products";
import DisplayCartProducts from "./components/displayCartProducts";

function NavBar(props) {
  const [cartClicked, setCartClicked] = useState(false);

  const handleClick = () => {
    console.log("Cart is clicked");
    setCartClicked(!cartClicked);
  };
  return (
    <div className="d-flex me-5 flex-column flex-md-row ">
      <ul className="nav nav-pills flex-column flex-md-row">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item dropdown">
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
      <ul className="ms-md-auto ps-3">
        <li
          className="nav-item d-flex flex-row"
          style={{
            listStyleType: "none",
            padding: "2px",
          }}
        >
          <NavLink
            className="fa fa-shopping-cart fa-2x mt-1"
            to="/cart"
          ></NavLink>
          <p style={{ fontSize: "1.8rem", marginLeft: "10px" }}>
            Items({props.CartData.length})
          </p>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    CartData: state.CartData,
  };
};

export default connect(mapStateToProps)(NavBar);
