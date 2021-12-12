import React from 'react'
import './info.css'
export default function Info(props) {
    return (
        <div className="disp">
            <img src={props.src} alt="" />
            <p className="value">{props.value + props.unit}</p>
        </div>
    )
}
