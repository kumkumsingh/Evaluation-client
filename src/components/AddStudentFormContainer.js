import React, { Component } from "react";
import AddStudentForm from "./AddStudentForm";
import { connect } from "react-redux";
import { createStudent } from "../actions/student";

class AddStudentFormContainer extends Component {
  // this is to add a student in a class
  state = {
    fullName: "",
    imgUrl: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createStudent({
      ...this.state,
      batchId: this.props.match.params.id
    });
    this.setState({
      fullName: "",
      imgUrl: ""
    });
  };
  render() {
    return (
      <div>
        <AddStudentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createStudent }
)(AddStudentFormContainer);
