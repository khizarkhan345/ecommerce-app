import React from "react";
import Input from "./input";

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
  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
            <th></th>
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

export default DisplayCart;
