import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../apiData/products";
import SlideShow from "./slideShow";
import { AddProduct } from "../../Action/DataAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import DisplayAllProduct from "../displayAllProduct";
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
      <h2 className="text-center">Best Selling Products</h2>
      <div className="row container m-0">
        {props.ProductData.map((product) => {
          if (product.id > 6) {
            return " ";
          } else {
            return (
              <DisplayAllProduct
                key={product.id}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
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
