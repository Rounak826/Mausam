import React from 'react'
import Day from '../Day/Day'
import './forecast.css'
import importAll from '../assets'
const assets = importAll();
const daily =[
    {
      "dt": 1639287000,
      "sunrise": 1639270972,
      "sunset": 1639309872,
      "moonrise": 1639294680,
      "moonset": 1639249440,
      "moon_phase": 0.29,
      "temp": {
        "day": 20.5,
        "min": 13.82,
        "max": 27.16,
        "night": 16.17,
        "eve": 25.39,
        "morn": 14.42
      },
      "feels_like": {
        "day": 19.31,
        "night": 15.07,
        "eve": 24.79,
        "morn": 12.81
      },
      "pressure": 1020,
      "humidity": 27,
      "dew_point": 0.88,
      "wind_speed": 2.94,
      "wind_deg": 350,
      "wind_gust": 3.28,
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
      "uvi": 5.75
    },
    {
      "dt": 1639373400,
      "sunrise": 1639357407,
      "sunset": 1639396291,
      "moonrise": 1639383060,
      "moonset": 1639338960,
      "moon_phase": 0.32,
      "temp": {
        "day": 24.02,
        "min": 13.14,
        "max": 27.49,
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
        "day": 23.8,
        "min": 13.62,
        "max": 27.23,
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
        "day": 25.93,
        "min": 14.09,
        "max": 27.56,
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
        "day": 25.42,
        "min": 13.43,
        "max": 27.25,
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
        "day": 25.36,
        "min": 13.5,
        "max": 27.54,
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
        "day": 25.69,
        "min": 14.06,
        "max": 27.69,
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
        "day": 23.29,
        "min": 10.61,
        "max": 25.94,
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
]
daily.shift();
function dayName(dateString){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(dateString*1000);
    let dayName = days[d.getDay()];
    return dayName;
}
function imageUrl(code){
    if(code==="01d")
        {
            return "a_1_sunny.svg";
        }
    if(code==="02d")
        {
            return "b_1_partly_cloudy.svg";
        }
    if(code==="03d"||code==="03n")
        {
            return "b_2_cloudy.svg";
        }
    if(code==="04d"||code==="04n")
        {
            return "b_3_very_cloudy.svg";   
        }
    if(code==="09d"||code==="09n")
        {
            return "d_3_sleet.svg"
        }
    if(code==="10d"||code==="10n")
        {
            return "c_1_rainy.svg";
        }
    if(code==="11d"||code==="11n")
        {
            return "c_3_thunderstorm.svg";
        }
    if(code==="13d"||code==="13n")
        {
            return "g_3_snowflake.svg";
        }
    if(code==="50d"||code==="50n")
        {
            return "d_4_fog.svg";
        }
    if(code==="01n")
        {
            return"a_4_night.svg";
        }
    if(code==="02n")
        {
            return"b_4_cloudy_night.svg";
        }
}
export default function Forecast() {
    return (
        <div className="forecast">
           { daily.map(element => <Day day={dayName(element.dt)} temp={element.temp} unit={'C'} icon={assets[imageUrl(element.weather[0].icon)]} />) }
        </div>
    )
}

