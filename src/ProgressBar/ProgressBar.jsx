import React from 'react'
import './progressbar.css'
export default function ProgressBar(props) {
    let per= props.per;
    if(props.per>=100){
        per = props.per-25;
    }
    return (
        <div className="progress-Bar" hidden={props.display}>
            <div className="ball" style={{bottom: per}}>

            </div>
        </div>
            
        
    )
}
