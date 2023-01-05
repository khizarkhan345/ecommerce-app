import React from "react";
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
