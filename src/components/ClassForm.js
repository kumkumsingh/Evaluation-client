import React from "react";
import { Link } from "react-router-dom";

export default function ClassForm(props) {
  console.log("checking props in classform", props);
  if (!props.batches) return "Loading";
  return (
    <div>
      {props.batches.map(batch => {
        return (
          <li key={batch.id} className="list-group-item">
            <Link to={`/batch/${batch.id}`}>Batch No:{batch.batchNo}</Link>
            <br></br> Start Date:{batch.stDate} <br></br>
            End Date: {batch.endDate}
          </li>
      
        );
      })}
    </div>
  );
}
