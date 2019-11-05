import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
          <p>Please login or sign up to evaluate the students</p>
        <Link to="/login">
          <button type="button" className="btn btn-primary">Login</button>
        </Link>

        <Link to="/signup">
          <button type="button" className="btn btn-primary">Sign Up</button>
        </Link>
      </div>
    );
  }
}