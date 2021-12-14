import React from 'react'
import './card.css'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Card(props) {
    return (
        <div className="card">
            <h5 className="head disabled">{props.title}</h5>
            <div className="display">
                <h1>{props.value}<span>{props.unit}</span></h1>
                <ProgressBar per={props.per} display={props.barHidden}/>
            </div>
            <h5>{props.remark}</h5>
        </div>
    )
}
