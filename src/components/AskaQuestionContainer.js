import React, { Component } from "react";

export default class AskaQuestionContainer extends Component {
  state = {
    selectedStudent: ""
  };
  render() {
    console.log(
      "checking props in AskaQuestionContainer",
      this.props.randomSelectedStudent
    );
    return (
      <div>
        <label>Selected Student is :{this.state.selectedStudent}</label>
        <button className="btn btn-primary" onClick={this.onClick}>
          AskaQueston
        </button>
      </div>
    );
  }
}
