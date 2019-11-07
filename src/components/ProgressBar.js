import React from 'react'
import ProgressBar1 from "react-bootstrap/ProgressBar";

export default function ProgressBar(props) {

    console.log('checking props in progress bar',props)
    // calculatePercentage = (props) => {
    //   props.
    // }
    if (!props.batch) return 'Loading'
    // else {
    //     const totalCount = props.count.reduce((total, amount) => total + amount);
    //     console.log('total count',totalCount)
    // }
   

    return (
        <div>
            <ProgressBar1>
            <ProgressBar1 variant="success" now={35} key={1} />
            <ProgressBar1 variant="warning" now={20} key={2} />
            <ProgressBar1 variant="danger" now={10} key={3} />
          </ProgressBar1>
            
        </div>
    )
}
