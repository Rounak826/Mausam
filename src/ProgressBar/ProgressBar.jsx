import React from 'react'
import './progressbar.css'
export default function ProgressBar(props) {
    return (
        <div className="progress-Bar" hidden={props.display}>
            <div className="ball" style={{bottom: props.per}}>

            </div>
        </div>
            
        
    )
}
