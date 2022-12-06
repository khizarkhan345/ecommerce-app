import { add } from "lodash";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./../apiData/products";
import { connect } from "react-redux";
import { AddCartProduct } from "../Action/CartAction";

function Product(props) {
  const [addToCart, setAddToCart] = useState(0);
  const [count, setCount] = useState(1);
  //const [productData, setProductData] = useState(null);

  const { id } = useParams();

  const products = getProducts();

  let product = props.ProductData.filter((product) => product.id == id);

  console.log(product);

  //setProductData(product);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productEdited = {
      id: product[0].id,
      title: product[0].title,
      quantity: count,
      price: product[0].price,
    };

    //product.count = addToCart;
    props.dispatch(AddCartProduct(productEdited));
    setCount(1);
  };

  return (
    <div className="container">
      <h1>Product Detail</h1>
      <div className="row m-1 my-3 ">
        <div className="col-6 vstack">
          <img
            src={product[0].images[0]}
            style={{ width: "400px", height: "320px" }}
          />
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              className="btn btn-primary btn-sm m-3"
              style={{ width: "150px", height: "80px" }}
              onClick={() => {
                setAddToCart(count);
                console.log("Add to Cart: ", addToCart);
              }}
            >
              Add to Cart
            </button>
          </form>
        </div>

        <div className="col-3">
          <div className="d-block">
            <img
              src={product[0].images[1]}
              style={{ width: "300px", height: "250px" }}
            />
          </div>
          <div className="d-block">
            <img
              src={product[0].images[2]}
              style={{ width: "300px", height: "250px" }}
            />
          </div>
        </div>
      </div>

      <h3>{product[0].title}</h3>
      <p>{product[0].description}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ProductData: state.ProductData,
  };
};

export default connect(mapStateToProps)(Product);
