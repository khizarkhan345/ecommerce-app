import React from "react";
import { Link } from "react-router-dom";
import "./displayProducts.css";
import { Rating } from "react-simple-star-rating";
import DisplayAllProduct from "./displayAllProduct";

function DisplayProducts({ products }) {
  return (
    <div className="container">
      <div className="row container">
        {products.map((product) => (
          <DisplayAllProduct
            id={product.id}
            image={product.images[0]}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
