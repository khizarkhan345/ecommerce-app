import React from "react";

function Contact() {
  return (
    <div className="container mb-3">
      <h3>Contact Us</h3>
      <form className="form-group">
        <label for="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />
        <label for="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
        <label for="message" className="form-label">
          Your Message
        </label>
        <textarea type="text" className="form-control" id="message" />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
