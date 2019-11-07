import React, { Component } from 'react'
import { connect } from "react-redux";
import  { deleteStudent } from '../actions/student'
import {createProfile} from '../actions/profile'
import { Redirect } from 'react-router-dom'
import StudentProfileForm from './StudentProfileForm'

 class StudentProfileDetail extends Component {
    
    state = {
        deleted: false,
        remarks:'',
        UpdatedDate: new Date(),
        colorCode:'',
       studentId: this.props.match.params.id

    }
    onSubmit = event => {
        event.preventDefault();
        console.log('checking props in StudentProfileDetail',this.state)
        this.props.createProfile(this.state);
        this.setState({
          remarks: "",
          UpdatedDate: new Date(),
          colorCode:''
        });
        this.props.history.push('/batch')
      };
    onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
      onClickGreen = () =>{
        this.setState({
            colorCode:'Green'
          });

      }
      onClickRed = () =>{
        this.setState({
            colorCode:'Red'
          });

      }
      onClickYellow = () =>{
        this.setState({
            colorCode:'Yellow'
          });

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
            <StudentProfileForm onSubmit={this.onSubmit} onChange={this.onChange} 
            onClickGreen={this.onClickGreen}
            onClickRed={this.onClickRed} onClickYellow={this.onClickYellow} values={this.state}/><br></br>
            <button className="btn btn-primary" onClick={this.onDelete}>Delete Student</button> 
            </div>
        )
    }
}
const mapStatesToProps = state => {
    return {
      Profile: state.Profile
    };
  };
export default connect(
    mapStatesToProps,
    { deleteStudent,createProfile}
  )(StudentProfileDetail);
