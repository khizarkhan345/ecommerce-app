import React from "react";
import "./footer.css";
import Contact from "./../contact";
function Footer() {
  return (
    <div className="footer">
      <div className="row row-group">
        <div className="col-sm">
          <h3>Information</h3>
          <ul className="list-group">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-sm">
          <h3>Products</h3>
          <ul className="list-group">
            <li>SmartPhones</li>
            <li>Laptops</li>
            <li>Fragrances</li>
            <li>SkinCare</li>
            <li>Groceries</li>
            <li>Home Decorations</li>
          </ul>
        </div>

        <div className="col-sm">
          <h3>Contact</h3>
          <p className="card-text"> Hagel Circle, Lorton Virginia</p>
          <p className="card-text">571-121-4556</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
