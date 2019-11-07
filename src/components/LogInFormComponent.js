import React, { Component } from "react";
import LogInForm from "./LogInForm";
import { logIn } from "../actions/login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LogInFormComponent extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const result = this.props.logIn(this.state.email, this.state.password);
    //this.props.logIn('kumkum@gmail.com','hello')
    if (result) {
      this.setState({ message: result });
    } else {
      this.setState({
        email: "",
        password: "",
        message: ""
      });
    }
  
  };
  render() {
      console.log('checking props',this.props.loggedIn)
    return this.props.loggedIn ? (
        // If we have a token, redirect to Home
        <Redirect to="/batch" />
      ):(
        <div>
          <p>{this.state.message}</p>
          <LogInForm
            value={this.state}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
          />
        </div>
      );
    }
  
}

const mapStatesToProps = state => {
  return {
    loggedIn: state.Login
  };
};
export default connect(
  mapStatesToProps,
  { logIn }
)(LogInFormComponent);
