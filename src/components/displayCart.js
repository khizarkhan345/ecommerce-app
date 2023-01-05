import React from "react";
import Input from "./input";
import _ from "lodash";

function DisplayCart(props) {
  const {
    edit,
    inputValue,
    cartData,
    handleInput,
    handleDelete,
    handleEdit,
    handleSubmit,
  } = props;

  let total = 0;

  {
    cartData.map((cart) => {
      const totalPrice = _.multiply(cart.price, cart.quantity);
      total = total + totalPrice;
    });
  }

  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th></th>
            <th></th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.title}</td>
              <td>{cart.quantity}</td>
              <td>${cart.price}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleEdit(cart.id, cart.quantity)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cart.id, cart.quantity)}
                >
                  Delete
                </button>
              </td>
              <td>${_.multiply(cart.price, cart.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex">
        <h3 className="m-3">Total Amount</h3>
        <h4 className="mt-3">${total}</h4>
      </div>
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

export default DisplayCart;
