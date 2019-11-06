import React from "react";
// import DateTime from 'react-datetime';

export default function CreateBatchForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Batch No</label>
        <input name="batchNo" value={props.values.batchNo} onChange={props.onChange}/>
        <label>Start Date</label>
        <input name="stDate" value={props.values.stDate} onChange={props.onChange} type="date"/>
        <label>End Date</label>
        <input name="endDate" value={props.values.endDate} onChange={props.onChange} type="date"/>
        <button type="submit" className="btn btn-primary">
          Create Batch
        </button>
      </form>
    </div>
  );
}
