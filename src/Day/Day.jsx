import React from 'react'
import './day.css'

export default function Day(props) {
    return (
        <div className="day">
            <h6>{props.day}</h6>
            <iframe src={props.icon} title={props.day + 'icon'} frameBorder="0" width={'80px'} height={'80px'}></iframe>
            <div className='tempDisplay'><h6>{props.temp.max}&#176;{props.unit}</h6><h6 className='disabled'>{props.temp.min}&#176;{props.unit}</h6></div>
        </div>
    )
}
