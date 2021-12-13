import { useMemo } from 'react';
import { useState, useEffect, useCallback } from 'react/cjs/react.development';
import './App.css';
import Forecast from './Forecast/Forecast';
import Highlights from './Highlights/Highlights';
import Navbar from './Nav/Navbar';
import Sidebar from './Sidebar/Sidebar';
const currentNoData={
  "dt": '--',
  "sunrise": '--',
  "sunset": '--',
  "temp": '--',
  "feels_like": '--',
  "pressure": '--',
  "humidity": '--',
  "dew_point": '--',
  "uvi": '--',
  "clouds": '--',
  "visibility": '--',
  "wind_speed": '--',
  "wind_deg": '--',
  "wind_gust": '--',
  "weather": [
    {
      "id": '--',
      "main": "'--'",
      "description": "'--'",
      "icon": "--"
    }
  ]
};
const dailyNoData=[
  {
    "dt": 1639373400,
    "sunrise": 1639357407,
    "sunset": 1639396291,
    "moonrise": 1639383060,
    "moonset": 1639338960,
    "moon_phase": 0.32,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 16.48,
      "eve": 25.68,
      "morn": 13.87
    },
    "feels_like": {
      "day": 23.18,
      "night": 15.44,
      "eve": 25.11,
      "morn": 12.3
    },
    "pressure": 1019,
    "humidity": 27,
    "dew_point": 4.03,
    "wind_speed": 2.35,
    "wind_deg": 160,
    "wind_gust": 2.48,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 10,
    "pop": 0,
    "uvi": 5.87
  },
  {
    "dt": 1639459800,
    "sunrise": 1639443842,
    "sunset": 1639482712,
    "moonrise": 1639471380,
    "moonset": 1639428420,
    "moon_phase": 0.35,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 16.68,
      "eve": 25.22,
      "morn": 13.99
    },
    "feels_like": {
      "day": 23.05,
      "night": 15.71,
      "eve": 24.69,
      "morn": 12.72
    },
    "pressure": 1017,
    "humidity": 31,
    "dew_point": 5.49,
    "wind_speed": 2.74,
    "wind_deg": 10,
    "wind_gust": 2.91,
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "clouds": 68,
    "pop": 0,
    "uvi": 5.69
  },
  {
    "dt": 1639546200,
    "sunrise": 1639530277,
    "sunset": 1639569133,
    "moonrise": 1639559760,
    "moonset": 1639517820,
    "moon_phase": 0.38,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 15.84,
      "eve": 21.92,
      "morn": 14.09
    },
    "feels_like": {
      "day": 25.28,
      "night": 14.84,
      "eve": 21.11,
      "morn": 12.81
    },
    "pressure": 1016,
    "humidity": 27,
    "dew_point": 5.42,
    "wind_speed": 2.91,
    "wind_deg": 20,
    "wind_gust": 3.28,
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": 92,
    "pop": 0,
    "uvi": 5.45
  },
  {
    "dt": 1639632600,
    "sunrise": 1639616710,
    "sunset": 1639655556,
    "moonrise": 1639648320,
    "moonset": 1639607280,
    "moon_phase": 0.41,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 16.1,
      "eve": 21.63,
      "morn": 13.43
    },
    "feels_like": {
      "day": 24.83,
      "night": 15.18,
      "eve": 20.87,
      "morn": 12.37
    },
    "pressure": 1017,
    "humidity": 31,
    "dew_point": 7.17,
    "wind_speed": 2.45,
    "wind_deg": 359,
    "wind_gust": 2.48,
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": 95,
    "pop": 0,
    "uvi": 6.17
  },
  {
    "dt": 1639719000,
    "sunrise": 1639703143,
    "sunset": 1639741979,
    "moonrise": 1639737060,
    "moonset": 1639696860,
    "moon_phase": 0.44,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 16.58,
      "eve": 22.06,
      "morn": 13.5
    },
    "feels_like": {
      "day": 24.76,
      "night": 15.68,
      "eve": 21.34,
      "morn": 12.42
    },
    "pressure": 1017,
    "humidity": 31,
    "dew_point": 7.09,
    "wind_speed": 2.1,
    "wind_deg": 136,
    "wind_gust": 2.15,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 7,
    "pop": 0,
    "uvi": 7
  },
  {
    "dt": 1639805400,
    "sunrise": 1639789575,
    "sunset": 1639828404,
    "moonrise": 1639825980,
    "moonset": 1639786440,
    "moon_phase": 0.47,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 15.98,
      "eve": 22.69,
      "morn": 14.06
    },
    "feels_like": {
      "day": 25.18,
      "night": 14.99,
      "eve": 22.09,
      "morn": 13.11
    },
    "pressure": 1015,
    "humidity": 33,
    "dew_point": 8.16,
    "wind_speed": 3.39,
    "wind_deg": 326,
    "wind_gust": 5.96,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 3,
    "pop": 0,
    "uvi": 7
  },
  {
    "dt": 1639895400,
    "sunrise": 1639876007,
    "sunset": 1639914830,
    "moonrise": 1639915200,
    "moonset": 1639876020,
    "moon_phase": 0.5,
    "temp": {
      "day": '--',
      "min": '--',
      "max": '--',
      "night": 10.61,
      "eve": 18.53,
      "morn": 12.11
    },
    "feels_like": {
      "day": 22.17,
      "night": 8.54,
      "eve": 16.91,
      "morn": 10.53
    },
    "pressure": 1016,
    "humidity": 19,
    "dew_point": -1.59,
    "wind_speed": 3.81,
    "wind_deg": 356,
    "wind_gust": 6.51,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 0,
    "pop": 0,
    "uvi": 7
  }
];
let search = true;
function App() {
  
  const apiKey = useMemo(()=>['d85052c6489309d8dd2e383d6df86fcd', 'c91bb7f5e6400bc5de0d8cde72c142b4'],[]);
  const [current, setCurrent] = useState(currentNoData)
  const [daily, setDaily] = useState(dailyNoData);
  const [aqi, setAqi] = useState(0);
  const [status, setStatus] = useState(false)
  //const [coords, setCoords] = useState({ lat: 0, long: 0 });
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState({ status: false, message: '' });
  const [cityName, setCityName] = useState('Loading...');
  const updateLocation = async (name) => {
    
    if (name) {
      
      let url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apiKey[0]}`
      let data = await fetch(url);
      let resData = await data.json();
      if (resData.length) { 
        let coords = { latitude: resData[0].lat, longitude: resData[0].lon }
        search = false;
        getData(coords)
        setCityName(name);
      } else {
        setError({ status: true, message: 'No info' })
      }
    }
  }
  const searchBtnHandler = (name) => {
    updateLocation(name)
  }

  const getData = useCallback(
    async (coords) => {
      setCityName('Loading...');
      //console.log(coords);
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely&appid=${apiKey[0]}&units=${unit}`;
      let aqiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey[0]}`;
      let reverse = `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=1&appid=${apiKey[0]}`
      let data = await fetch(url);
      let reverseData = await fetch(reverse);
      let aqiData = await fetch(aqiUrl);
      if (data.status === 200) {
        let resData = await data.json();
        resData.daily.shift();
        setDaily(resData.daily);
        setCurrent(resData.current);
        setStatus(true);
      } else {
        setError({ status: true, message: 'could not fetch data' })
        setDaily(dailyNoData);
        setCurrent(currentNoData);
      }
      if(reverseData.status===200){
        let resReverse = await reverseData.json();
        setCityName(resReverse[0].name); 
      }else{
        setCityName('No Info!');
      }
      if (aqiData.status === 200) {
        let resAqiData = await aqiData.json();
        setAqi(resAqiData.list[0].main.aqi);
      } else {
        setAqi("--")
      }

    }, [unit, apiKey]
  )
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        if (search) {
          getData(position.coords);
          search = false;
        }

      });
    }


  }, [getData])
  return (
    <div className="App row-fluid parent">
      <Navbar />
      <Forecast daily={daily} />
      <div className="head">
        <h5>Today's Highlights</h5>
      </div>
      <Highlights data={current} aqi={aqi} />
      <Sidebar cityName={cityName} error={error}  current={current} searchHandler={searchBtnHandler} />

    </div>
  );
}

export default App;
