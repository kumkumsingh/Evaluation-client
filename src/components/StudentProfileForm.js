import React, { Component } from "react";

export default class StudentProfileForm extends Component {
  render() {
    console.log("sddcd", this.props);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>Enter Remarks</label>
          <input
            name="remarks"
            value={this.props.values.remarks}
            onChange={this.props.onChange}
          ></input>
          <label>Daily Evaluation for [dd]/[mm]/[yyyy]</label>
          <input
            name="UpdatedDate"
            type="Date"
            onChange={this.props.onChange}
          ></input>
          <br></br>
          <br></br>
          <div>
            <input
              type="button"
              className="btn btn-danger"
              onClick={this.props.onClickRed}
              value="RED"
            ></input>
            <input
              type="button"
              className="btn btn-warning"
              onClick={this.props.onClickYellow}
              value="YELLOW"
            ></input>
            <input
              type="button"
              className="btn btn-success"
              onClick={this.props.onClickGreen}
              value="GREEN"
            ></input>
          </div>
          <br></br>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="submit" class="btn btn-primary">
            Save and Next
          </button>
        </form>
      </div>
    );
  }
}
