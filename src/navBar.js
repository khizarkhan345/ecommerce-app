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
    <div className="hstack">
      <ul className="nav nav-pills my-2">
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
      <div className="m-auto">
        <i
          className="fa fa-shopping-cart fa-2x"
          aria-hidden="true"
          onClick={handleClick}
        >
          {props.CartData.length === 0 ? "" : props.CartData.length}
        </i>
        {cartClicked ? <DisplayCartProducts /> : ""}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    CartData: state.CartData,
  };
};

export default connect(mapStateToProps)(NavBar);
