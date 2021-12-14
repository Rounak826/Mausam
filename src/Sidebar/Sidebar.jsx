import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce';
import './Sidebar.css'
import importAll from '../assets';
import { Search, Crosshair, Cloud, CloudRain } from 'react-feather';
import imageUrl from '../imgUrl';
import Loader from '../Loader/Loader';
const assets = importAll();

let key =0;
export default function Sidebar(props) {
    const [list, setList] = useState(['Mungeli','Bilaspur','Raipur']);
    const [city, setCity] = useState('mungeli')

    const changeHandler = async event => {
        let url ='https://api.locationiq.com/v1/autocomplete.php?key=pk.dbba3add5cfe9f4f88b5f093e0c90981&q='+event.target.value+'&limit=5' ;
        fetch(url).then(async (a)=>{
            let array=await a.json();
            setList(await array);
            setCity(event.target.value);
        });
      };
    
    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300)
      , []);
    

    function time(timestamp){
        let t = new Date(timestamp*1000);
        return t.toLocaleString('en-IN', {hour: 'numeric', minute:'numeric',hour12: true })
    }
    function dayName(dateString){
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(dateString*1000);
        let dayName = days[d.getDay()];
        return dayName;
    }

    return (
        <div className="sidebar col-md-3">
            <div className="input-group pt-3">
            <Search color='#111' size="20" className='my-auto' />
                <input autoComplete='off' onChange={(e)=>{debouncedChangeHandler(e)}}name='city_name' list="cityList" type="text" className="form-control  search-input mx-1" placeholder="Search for places" aria-label="Search for places" aria-describedby="basic-addon2" />
                    <datalist id="cityList">
                        {list.length?list.map((i)=><option key={key++} value={i.display_place}/>): 0 }
                    </datalist>
                    <div className="input-group-append">
                        <button onClick={()=>{props.searchHandler(city)}} className="btn btn-light search-btn" type="button"><Crosshair color='#111' size="21" className='pb-1'/></button>
                    </div>
            </div>
            {props.status&&<Loader />}
            <iframe title="weather icon" height='250px' className='icon' src={assets[imageUrl(props.current.weather[0].icon)]} frameBorder="0"></iframe>
            <div className="basic-info">
                <h1>{props.current.temp!=='--'?props.current.temp.toFixed(1):props.current.temp}<span>&#176;{props.unit.temp}</span></h1>
                <h4>{dayName(props.current.dt)}, <span className='disabled'>{time(props.current.dt)}</span></h4>
                <hr />
            </div>
            <div className="other-info">
                <div className="desc">
                    <Cloud color='#A9A9A9'/>
                    <p>{props.current.weather[0].description}</p>
                </div>
                <div className="desc">
                    <CloudRain color='#A9A9A9'/>
                    <p>{props.current.dew_point}%</p>
                </div>
            </div>
            <div className="location mb-5">
                <h3>{props.cityName}</h3>
            </div>
        </div>
    )
}
