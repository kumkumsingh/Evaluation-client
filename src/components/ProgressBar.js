import React from 'react'
import ProgressBar1 from "react-bootstrap/ProgressBar";

export default function ProgressBar() {
    return (
        <div>
            <ProgressBar1>
            <ProgressBar1 variant="success" now={35} key={1} />
            <ProgressBar1 variant="warning" now={25} key={2} />
            <ProgressBar1 variant="danger" now={30} key={3} />
          </ProgressBar1>
            
        </div>
    )
}
