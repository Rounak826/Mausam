import React from 'react'
import './progress.css'
export default function Progress(props) {
    return (
        <div className="progressBar">
            <div className="barOverflow">
                <div className="bar" style={{transform: "rotate(" + (45 + props.per * 1.8) + "deg)"}}></div>
            </div>
            <h1>{props.value}</h1>
        </div>
    )
}
