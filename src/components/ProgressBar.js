import React from 'react'
import ProgressBar1 from "react-bootstrap/ProgressBar";

export default function ProgressBar(props) {
    console.log('checking props in progress bar red',props.count[0])
    return (
        <div>
            <ProgressBar1>
            <ProgressBar1 variant="success" now={props.count[1]} key={1} />
            <ProgressBar1 variant="warning" now={props.count[2]} key={2} />
            <ProgressBar1 variant="danger" now={props.count[0]} key={3} />
          </ProgressBar1>
            
        </div>
    )
}
