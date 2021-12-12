import { useState, useEffect, useCallback } from 'react/cjs/react.development';
import './App.css';
import Forecast from './Forecast/Forecast';
import Highlights from './Highlights/Highlights';
import Navbar from './Nav/Navbar';
import Sidebar from './Sidebar/Sidebar';
function App() {
  const apiKey='d85052c6489309d8dd2e383d6df86fcd';
  //
  const [current, setCurrent] = useState({
    "dt": 1639277640,
    "sunrise": 1639270972,
    "sunset": 1639309872,
    "temp": 18.32,
    "feels_like": 16.99,
    "pressure": 1020,
    "humidity": 30,
    "dew_point": 0.46,
    "uvi": 1.17,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 2.1,
    "wind_deg": 10,
    "wind_gust": 2.56,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ]
  })
  const [daily, setDaily] =useState([]);
  const [city, setCity] = useState('mungeli')
  const [coords, setCoords] = useState({lat: 22.0667, long:81.6833});
  const [unit, setUnit] = useState('metric');
  const getData = useCallback(
    async ()=>{
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.long}&exclude=minutely&appid=${apiKey}&units=${unit}`;
      let data = await fetch(url);
      let resData = await data.json();
      resData.daily.shift();
      setDaily(resData.daily);
      setCurrent(resData.current);
      console.log(resData.current.weather[0]);
      return resData;
      
    }, [coords, unit]
  )
  useEffect(() => {
    getData();
  }, [getData])
  return (
    <div className="App row-fluid parent">
       <Navbar />
       <Forecast daily={daily}/>
       <div className="head">
         <h5>Today's Highlights</h5>
       </div>
       <Highlights data={current} aqi={2} />
       <Sidebar current={current} />
      
    </div>
  );
}

export default App;
