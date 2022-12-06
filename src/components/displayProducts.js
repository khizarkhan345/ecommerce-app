import React from "react";
import { Link } from "react-router-dom";

function DisplayProducts({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col m-2"
            style={{ border: "1px solid gray" }}
          >
            <img
              src={product.images[0]}
              style={{ width: "200px", height: "200px" }}
            />
            <h3 className="center">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
            <h4>Price: {product.price}</h4>
            <h4>Rating: {product.rating}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
