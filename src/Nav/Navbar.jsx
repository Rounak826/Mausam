import React from 'react'
import './nav.css'

export default function Navbar(props) {
    return (
        <nav className='py-auto px-3'>
            <div className="brand">
                   <h3>Mausam</h3>
            </div>
            
            <div className="nav-items">
                <button onClick={()=>{props.unitsHandler('metric')}} className={props.active.c}>&#176;C</button>
                <button onClick={()=>{props.unitsHandler('imperial')}} className={props.active.f}>&#176;F</button>
            </div>
        </nav>
    )
}
