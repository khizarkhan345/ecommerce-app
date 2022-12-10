import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../apiData/products";
import SlideShow from "./Dashboard/slideShow";
import { AddProduct } from "../Action/DataAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard(props) {
  useEffect(() => {
    const product = getProducts();
    //setCategories([...category]);
    //setProducts([...product]);
    props.dispatch(AddProduct(product));
    //product.map((p) => props.dispatch(AddProduct(p)));
  }, []);

  return (
    <div className="container">
      <h2>Best Selling Products</h2>
      <div className="row m-2">
        {props.ProductData.map((product) => {
          if (product.id > 6) {
            return " ";
          } else {
            return (
              <div
                key={product.id}
                className="card text-center m-1"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.images[0]}
                  alt=""
                  style={{ height: "12rem" }}
                />
                <h5 className="card-title mt-3">{product.title}</h5>
                <p className="card-text"> ${product.price}</p>
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
            );
          }
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    ProductData: state.ProductData,
    CartData: state.CartData,
    Filter: state.Filter,
  };
};
export default connect(mapStateToProps)(Dashboard);
