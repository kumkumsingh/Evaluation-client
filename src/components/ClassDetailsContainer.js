import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchBatch} from '../actions/batch'
import ClassDetail from './ClassDetail'

class ClassDetailsContainer extends Component {
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchBatch(id)
    }
    render() {
        return (
            <div>
              <ClassDetail batch={this.props.Batch}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log('checking state of batch',state.Batch); // check what the state is
    return {
        Batch: state.Batch
    };
  };
export default connect(
    mapStateToProps,
    { fetchBatch }
  )(ClassDetailsContainer);