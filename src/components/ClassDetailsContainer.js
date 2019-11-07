import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBatch } from "../actions/batch";
import { colorCount } from "../actions/student";
import { randomStudentSelected } from "../actions/askQuestion";
import ClassDetail from "./ClassDetail";
import ProgressBar from "./ProgressBar";
import AskaQuestionContainer from "./AskaQuestionContainer";

//this is for student view in a class
class ClassDetailsContainer extends Component {
  state = {
    askedQuestionClicked: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchBatch(id);
    this.props.colorCount();
  }
  onClick = () => {
    this.props.randomStudentSelected();
    this.setState({
      askedQuestionClicked: true
    });
  };
  render() {
    if (this.state.askedQuestionClicked) {
        return  <AskaQuestionContainer RandomStudent={this.props.RandomStudent} />
    }
    console.log("checking state of count in render", this.props.Count);
    return (
      <div>
        <ProgressBar count={this.props.Count} />
        <ClassDetail batch={this.props.Batch} />
        <button className="btn btn-primary" onClick={this.onClick}>
          AskaQueston
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // check what the state is
  return {
    Batch: state.Batch,
    Count: state.Count,
    RandomStudent: state.RandomStudent
  };
};
export default connect(
  mapStateToProps,
  { fetchBatch, colorCount, randomStudentSelected }
)(ClassDetailsContainer);
