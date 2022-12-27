import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../apiData/products";
import SlideShow from "./slideShow";
import { AddProduct } from "../../Action/DataAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./dashboard.css";

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
      <div className="row container m-md-2 ">
        {props.ProductData.map((product) => {
          if (product.id > 6) {
            return " ";
          } else {
            return (
              <div className="col">
                <div key={product.id} className="card product text-center m-1">
                  <img
                    src={product.images[0]}
                    alt=""
                    style={{ height: "12rem" }}
                  />
                  <h5 className="card-title mt-3">{product.title}</h5>
                  <p className="card-text"> ${product.price}</p>
                  <Rating
                    initialValue={product.rating}
                    size={25}
                    allowFraction
                    fillColor="orange"
                    emptyColor="gray"
                  />
                  <button className="btn btn-primary product-button m-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="product-link"
                    >
                      View
                    </Link>
                  </button>
                </div>
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
