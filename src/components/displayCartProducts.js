import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { RemoveCartProduct, EditCartProduct } from "../Action/CartAction";
import Input from "./input";

function DisplayCartProducts(props) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState("");

  const handleEdit = (id) => {
    setEdit(true);
    setId(id);
    console.log("Handle Edit called");
    //props.dispatch(R(id));
  };

  const handleDelete = (id) => {
    console.log("Handle Delete called");
    props.dispatch(RemoveCartProduct(id));
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue);

    props.dispatch(EditCartProduct(id, { quantity: inputValue }));
    setInputValue("");
    setEdit(false);
  };
  return (
    <div>
      <h2>Cart Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cartData.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.title}</td>
              <td>{cart.quantity}</td>
              <td>{cart.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleEdit(cart.id)}
                >
                  Edit Quantity
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(cart.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {edit ? (
        <Input
          value={inputValue}
          handleChange={handleInput}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
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
