import React, { Component } from "react";
import ClassForm from "./ClassForm";
import { loadBatches } from "../actions/batch";
import { connect } from "react-redux";

class ClassFormContainer extends Component {
  componentDidMount() {

    this.props.loadBatches();
    // console.log('checking batches',this.props)
  }
  render() {
    return (
      <div>
        <ClassForm batches={this.props.Batches} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  //console.log('checking state of batches',state.Batches); // check what the state is
  return {
    Batches: state.Batches
  };
};

export default connect(
  mapStateToProps,
  { loadBatches }
)(ClassFormContainer);
