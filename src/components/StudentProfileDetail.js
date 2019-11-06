import React, { Component } from 'react'
import { connect } from "react-redux";
import  { deleteStudent } from '../actions/student'
import { Redirect } from 'react-router-dom'

 class StudentProfileDetail extends Component {
    state = {
        deleted: false
    }
    // for deleting a particular student
    onDelete = () => {
        this.props.deleteStudent(this.props.match.params.id)
        console.log('checking id from profile',this.props.match.params.id)
        this.setState({ deleted: true })
    }
    render() {
        if (this.state.deleted) {
            return <Redirect to="/batch" />;
        }
        return (
            <div>
            <button className="btn btn-primary" onClick={this.onDelete}>Delete Student</button> 
            </div>
        )
    }
}
export default connect(
    null,
    { deleteStudent }
  )(StudentProfileDetail);
