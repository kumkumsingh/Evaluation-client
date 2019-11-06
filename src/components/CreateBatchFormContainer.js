import React, { Component } from "react";
import CreateBatchForm from "./CreateBatchForm";
import { createbatch } from "../actions/batch";
import { connect } from "react-redux";


class CreateBatchFormContainer extends Component {
    //this component is for creating a class 
  state = {
    batchNo: "",
    stDate: new Date(),
    endDate: new Date()
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log('checking props in createbatchformcontainer',this.state)
    this.props.createbatch(this.state);
    this.setState({
      batchNo: "",
      stDate: new Date(),
      endDate: new Date()
    });
  };
  render() {
    return (
      <div>
        <CreateBatchForm onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}/>
      </div>
    );
  }
}
export default connect(
  null,
  { createbatch }
)(CreateBatchFormContainer);
