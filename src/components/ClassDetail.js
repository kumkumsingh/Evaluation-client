import React from 'react'
import { Link } from "react-router-dom";

export default function ClassDetail(props) {
    //having the list of students in a class  
    console.log('checking props in classdetail',props)
    if (!props.batch) return 'Loading'
    return (
        <div>
             <p>{`Batch Number: ${props.batch.batchNo}`}</p>
            <p>List of Students</p>
            {props.batch.batchNo && <ul>{props.batch.students.map((student, index) => {
                return <li key={index} className="list-group-item"><Link to={`/student/${student.id}`}>{student.fullName}</Link>
                <Link to={`/student/${student.id}`}><img src = {student.imgUrl} alt="Not available"/></Link>
                {student.lstCode}
                </li>
            })}</ul>}
            
        </div>
    )
}

