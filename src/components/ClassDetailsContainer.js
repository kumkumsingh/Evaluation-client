import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBatch } from "../actions/batch";
import { colorCount } from "../actions/student";
import ClassDetail from "./ClassDetail";
import ProgressBar from './ProgressBar';
import {randomStudentSelected} from '../actions/askQuestion'
import AskaQuestionContainer from './AskaQuestionContainer'

//this is for student view in a class
class ClassDetailsContainer extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchBatch(id);
    this.props.colorCount();
    this.props.randomStudentSelected()
  }
  render() {
    console.log("checking state of count in render", this.props.Count);
    return (
      <div>
         <ProgressBar count={this.props.Count}/>
        <ClassDetail batch={this.props.Batch} />
        <div>
        <AskaQuestionContainer randomSelectedStudent={this.props.RandomSelectedStudent}/>
        </div>
       
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("checking state of random student", state.RandomStudent); // check what the state is
  return {
    Batch: state.Batch,
    Count: state.Count,
    RandomSelectedStudent:state.RandomStudent
  };
};
export default connect(
  mapStateToProps,
  { fetchBatch, colorCount ,randomStudentSelected}
)(ClassDetailsContainer);
