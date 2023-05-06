import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Clear from "./images/clear1.jpg";
import Cloudy from "./images/cloudy1.jpg"
import Overcast from "./images/overcast1.jpg";
import Rainy from "./images/rainy1.jpg";
import Snow from "./images/snow1.jpg";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('kanpur')
// useEffect(() => {
//    searchLocation();
// }, []);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }) 
      setLocation('')
    }
  }

  return (
    
    <body>

   <div className='app'
    // className= {(data.weather.main !="undefined")? ((data.weather.main.temp>16)?'app warm': 'app') :'app' }

  //  style={  
  //   data.weather[0].main?.toLowerCase() === "clear" ||
  //   data.weather[0].main?.toLowerCase() === "sunny"
  //    ? { backgroundImage: `url(${Clear})` }
  //    : data.weather[0].main?.toLowerCase().includes("clouds")
  //    ? { backgroundImage: `url(${Cloudy})` }
  //    : data.weather[0].main?.toLowerCase().includes("rainy")
  //    ? { backgroundImage: `url(${Rainy})` }
  //    : data.weather[0].main?.toLowerCase().includes("snow")
  //    ? { backgroundImage: `url(${Snow})` } 
  //    : { backgroundImage: `url(${Overcast})` }  } 
     >
    <div className="header">
      <h1>Weather-App</h1>
    </div>
      <div className="search">
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            {/* <span>{data.country}</span> */}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div> 
    </body>
 );
}

export default App;