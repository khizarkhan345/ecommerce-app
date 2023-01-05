import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { RemoveCartProduct, EditCartProduct } from "../Action/CartAction";
import { AddStock, ReduceStock } from "../Action/DataAction";
import DisplayCart from "./displayCart";
import { toNumber } from "lodash";
import "./displayCartProducts.css";

function DisplayCartProducts(props) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [oldQuantity, setOldQuantity] = useState(0);
  const [id, setId] = useState("");

  const handleEdit = (id, oldQuantity) => {
    setEdit(true);
    setId(id);
    setOldQuantity(oldQuantity);
    console.log("Handle Edit called");
    //props.dispatch(R(id));
  };

  const handleDelete = (id, quantity) => {
    console.log("Handle Delete called");
    props.dispatch(RemoveCartProduct(id));
    props.dispatch(AddStock(id, toNumber(quantity)));
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue);

    props.dispatch(EditCartProduct(id, { quantity: inputValue }));
    if (toNumber(inputValue) > toNumber(oldQuantity)) {
      let quantity = toNumber(inputValue) - toNumber(oldQuantity);
      props.dispatch(ReduceStock(id, toNumber(quantity)));
    } else {
      const quantity = toNumber(oldQuantity) - toNumber(inputValue);
      props.dispatch(AddStock(id, toNumber(quantity)));
    }
    setInputValue("");
    setEdit(false);
  };
  return (
    <div className="container cart">
      <h2 className="text-center">Cart Data</h2>
      {props.cartData.length === 0 ? (
        <p className="text-center mt-4 text-danger">Cart is Empty</p>
      ) : (
        <DisplayCart
          cartData={props.cartData}
          edit={edit}
          inputValue={inputValue}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartData: state.CartData,
  };
};

export default connect(mapStateToProps)(DisplayCartProducts);
