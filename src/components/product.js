import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { AddCartProduct } from "../Action/CartAction";
import { ReduceStock } from "../Action/DataAction";
import { toNumber } from "lodash";
import ImageGallery from "react-image-gallery";
import "./product.css";

function Product(props) {
  const [addToCart, setAddToCart] = useState(0);
  const [count, setCount] = useState(1);
  //const [productData, setProductData] = useState(null);

  const { id } = useParams();

  //const products = getProducts();

  let product = props.ProductData.filter((product) => product.id == id);

  console.log(product);

  //setProductData(product);

  var Images = [];

  product[0].images.map((p) => {
    Images.push({
      original: p,
      thumbnail: p,
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const productEdited = {
      id: product[0].id,
      title: product[0].title,
      quantity: toNumber(count),
      stock: product[0].stock,
      price: product[0].price,
      totalPrice: toNumber(count) * product[0].price,
    };

    //product.count = addToCart;
    props.dispatch(AddCartProduct(product[0].id, productEdited));
    props.dispatch(ReduceStock(product[0].id, toNumber(count)));
    setCount(1);
  };

  return (
    <div className="container">
      <h1>Product Detail</h1>
      <div className="row m-1 hstack">
        <div className="col">
          <ImageGallery
            items={Images}
            originalHeight="350px"
            originalWidth="400px"
          />
        </div>
        <div className="col">
          <h3 className="mb-4">{product[0].title}</h3>
          <form className="form-group hstack mt-3" onSubmit={handleSubmit}>
            <input
              type="number"
              className="form-control"
              value={count}
              max={product[0].stock}
              style={{ width: "8rem", height: "2.2rem" }}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              className="btn btn-danger btn-sm m-1"
              style={{ width: "6rem", height: "2.2rem" }}
              onClick={() => {
                setAddToCart(count);
                console.log("Add to Cart: ", addToCart);
              }}
            >
              Add to Cart
            </button>
          </form>
          <p className="mt-6">{product[0].description}</p>
          <p>Stock: {product[0].stock}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ProductData: state.ProductData,
  };
};

export default connect(mapStateToProps)(Product);
