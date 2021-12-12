import React from 'react'
import './day.css'

export default function Day(props) {
    return (
        <div className="day">
            <h5>{props.day}</h5>
            <iframe src={props.icon} title={props.day + 'icon'} frameBorder="0" width={'100px'} height={'100px'}></iframe>
            <p>{props.temp}&#176;{props.unit}</p>
        </div>
    )
}
