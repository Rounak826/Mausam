import React from 'react'
import Day from '../Day/Day'
import './forecast.css'
import importAll from '../assets'
import imageUrl from '../imgUrl'
const assets = importAll();
function dayName(dateString){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(dateString*1000);
    let dayName = days[d.getDay()];
    return dayName;
}

export default function Forecast(props) {
   let daily = props.daily;

    return (
        <div className="forecast">
           {daily.map(element => <Day key={dayName(element.dt)} day={dayName(element.dt)} temp={element.temp} unit={props.unit.temp} icon={assets[imageUrl(element.weather[0].icon)]} />) }
        </div>
    )
}

