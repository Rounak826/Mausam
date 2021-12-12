import React from 'react'
import Progress from '../Progress/Progress'
import './highlights.css'
import { ArrowUpCircle } from 'react-feather'
import importAll from '../assets'
import Card from '../Card/Card'


const assets = importAll();

export default function Highlights(props) {
    const size = '70px';    

    function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    function time(timestamp){
        let t = new Date(timestamp*1000);
        return t.toLocaleString('en-IN', {hour: 'numeric', minute:'numeric',hour12: true })
    }
    
    return (
        <div className="highlights">
                <div className="card uvi">
                    <h5 className="head disabled">UV index</h5>
                    <Progress per={props.data.uvi*10} value={props.data.uvi} />
                </div>
                <div className="card wind">
                    <h5 className="head disabled">Wind Status</h5>
                    <h1>{props.data.wind_speed} <span>Km/Hr</span></h1>
                    <div className="direction">
                        <ArrowUpCircle color='dodgerblue' style={{transform: "rotate(" + (props.data.wind_deg) + "deg)"}}></ArrowUpCircle>
                        <span>{degToCompass(props.data.wind_deg)}</span>
                    </div>
                </div>
                <div className="card sun">
                    <h5 className="head disabled">Sunrise &#38; Sunset</h5>
                    <div className="sunrise">
                        <iframe  width={size} height={size} src={assets['f_1_sunrise.svg']} title='sunrise' frameBorder="0"></iframe>
                        <h6>{time(props.data.sunrise)}</h6>
                    </div>
                    <div className="sunset">
                        <iframe width={size} height={size} src={assets['f_2_sunset.svg']} title='sunset' frameBorder="0"></iframe>
                        <h6>{time(props.data.sunset)}</h6>
                    </div>
                </div>
                <Card title={'humidity'} value={props.data.humidity +'%'} per={props.data.humidity} remark={'Low'} barHidden={false}/>
                <Card title={'visibility'} value={props.data.visibility} per={0} remark={'normal'} barHidden={true}/>
                <Card title={'Air Quality'} value={props.aqi} per={props.aqi*20} remark={'Low'} barHidden={false}/>
        </div>
    )
}
