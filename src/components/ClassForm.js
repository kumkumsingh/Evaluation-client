import React from "react";
import { Link } from "react-router-dom";

export default function ClassForm(props) {
  console.log("checking props in classform", props);
  if (!props.batches) return "Loading";
  return (
    <div>
      {props.batches.map(data => {
        return (
          <li key={data.id} className="list-group-item">
            <Link to={`/batch/${data.id}`}>Batch No:{data.batchNo}</Link>
            <br></br> Start Date:{data.stDate} <br></br>
            End Date: {data.endDate}
          </li>
        );
      })}
    </div>
  );
}
