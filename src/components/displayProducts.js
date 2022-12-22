import React from "react";
import { Link } from "react-router-dom";
import "./displayProducts.css";

function DisplayProducts({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="card product text-center m-1 ">
            <img src={product.images[0]} alt="" className="product-image" />
            <h5
              className="card-title product-header mt-3"
              style={{ fontSize: "15px" }}
            >
              {product.title}
            </h5>
            <p className="card-text"> ${product.price}</p>

            <p className="card-text">Rating: {product.rating}</p>
            <button className="btn btn-primary product-button mb-2">
              <Link to={`/product/${product.id}`} className="product-link">
                View
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
