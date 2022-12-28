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
            <th>Price per Quantity</th>
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
                  className="btn btn-danger"
                  onClick={() => handleEdit(cart.id, cart.quantity)}
                >
                  Edit Quantity
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(cart.id, cart.quantity)}
                >
                  Delete
                </button>
              </td>
              <td>${_.multiply(cart.price, cart.quantity)}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
          <tr>
            <td className="h5">Total Amount</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${total}</td>
          </tr>
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

export default DisplayCart;
