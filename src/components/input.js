import React from "react";

function Input(props) {
  return (
    <form className="form-group" onSubmit={props.handleSubmit}>
      <input type="number" value={props.value} onChange={props.handleChange} />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Input;
