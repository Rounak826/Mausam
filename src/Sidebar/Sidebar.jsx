import React from 'react'
import './Sidebar.css'
import importAll from '../assets';
import { Search, Crosshair, Cloud, CloudRain } from 'react-feather';
const assets = importAll();
export default function Sidebar() {
    return (
        <div className="sidebar col-md-3">
            <div className="input-group pt-3">
            <Search color='#111' size="20" className='my-auto' />
                <input type="text" className="form-control  search-input mx-1" placeholder="Search for places" aria-label="Search for places" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-light search-btn" type="button"><Crosshair color='#111' size="21" className='pb-1'/></button>
                    </div>
            </div>
            <iframe title="weather icon" height='250px' className='icon' src={assets['a_3_very_sunny.svg']} frameBorder="0"></iframe>
            <div className="basic-info">
                <h1>21&#176; C</h1>
                <h4>Monday, <span className='disabled'>16:00</span></h4>
                <hr />
            </div>
            <div className="other-info">
                <div className="desc">
                    <Cloud color='#A9A9A9'/>
                    <p>Mostly cloudy</p>
                </div>
                <div className="desc">
                    <CloudRain color='#A9A9A9'/>
                    <p>33%</p>
                </div>
            </div>
            <div className="location mb-5">
                <h3>Mungeli</h3>
            </div>
        </div>
    )
}