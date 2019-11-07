import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBatch } from "../actions/batch";
import { colorCount } from "../actions/student";
import ClassDetail from "./ClassDetail";
import ProgressBar from './ProgressBar';



class ClassDetailsContainer extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchBatch(id);
    this.props.colorCount();
  }
  render() {
    console.log("checking state of count in render", this.props.Count);
    return (
      <div>
         <ProgressBar count={this.props.Count}/>
        <ClassDetail batch={this.props.Batch} />
       
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("checking state of count", state.Count); // check what the state is
  return {
    Batch: state.Batch,
    Count: state.Count
  };
};
export default connect(
  mapStateToProps,
  { fetchBatch, colorCount }
)(ClassDetailsContainer);
