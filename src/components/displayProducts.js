import React from "react";
import { Link } from "react-router-dom";

function DisplayProducts({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="card text-center m-1"
            style={{ width: "16rem" }}
          >
            <img src={product.images[0]} alt="" style={{ height: "12rem" }} />
            <h5 className="card-title mt-3" style={{ fontSize: "15px" }}>
              {product.title}
            </h5>
            <p className="card-text"> ${product.price}</p>

            <p className="card-text">Rating: {product.rating}</p>
            <button
              className="btn btn-primary mb-2"
              style={{ width: "5rem", alignSelf: "center" }}
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
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
