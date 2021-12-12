import React from 'react'
import './nav.css'

export default function Navbar() {
    return (
        <nav className='py-auto px-3'>
            <div className="brand">
               <h3>City Weather</h3>
            </div>
            <div className="nav-items">
                <button className="cur">&#176;C</button>
                <button className="units">&#176;F</button>
            </div>
        </nav>
    )
}
