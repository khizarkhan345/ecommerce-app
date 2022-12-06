import React from "react";
import { connect } from "react-redux";
import { RemoveCartProduct, EditCartProduct } from "../Action/CartAction";

function DisplayCartProducts(props) {
  const handleEdit = (id) => {
    console.log("Handle Edit called");
    //props.dispatch(R(id));
  };

  const handleDelete = (id) => {
    console.log("Handle Delete called");
    props.dispatch(RemoveCartProduct(id));
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
                  Edit
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
