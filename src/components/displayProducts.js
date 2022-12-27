import React from "react";
import { Link } from "react-router-dom";
import "./displayProducts.css";
import { Rating } from "react-simple-star-rating";

function DisplayProducts({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col">
            <div key={product.id} className="card product text-center m-1 ">
              <img src={product.images[0]} alt="" className="product-image" />
              <h5 className="card-title product-header mt-3">
                {product.title}
              </h5>
              <p className="card-text"> ${product.price}</p>

              <Rating
                initialValue={product.rating}
                size={25}
                allowFraction
                fillColor="orange"
                emptyColor="gray"
              />

              <button className="btn btn-primary product-button m-2">
                <Link to={`/product/${product.id}`} className="product-link">
                  View
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
