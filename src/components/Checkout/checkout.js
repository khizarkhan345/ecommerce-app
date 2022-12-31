import React from "react";
import { useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(name);
    // console.log(email);
    // console.log(phoneNo);
    // console.log(address);
    // console.log(city);
    // console.log(state);
    // console.log(zip);
  };

  return (
    <div className="container mb-3">
      <h3>Check Out</h3>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-md-4">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="phoneno" className="form-label">
            Phone No
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneno"
            value={phoneNo}
            onChange={handlePhoneNoChange}
            required
          />
        </div>
        <div className="col-12">
          <label for="address" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label for="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={state}
            onChange={handleStateChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label for="zipcode" className="form-label">
            Zip
          </label>
          <input
            type="number"
            className="form-control"
            id="zipcode"
            value={zip}
            onChange={handleZipChange}
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary mt-2 center">Check Out</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
