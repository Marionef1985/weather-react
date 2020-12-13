import React, {useState} from "react";
import axios from "axios";
import "./WeatherApp.css";
import Todaycard from "./Todaycard";
import Forecast from "./Forecast";
import Loader from 'react-loader-spinner'

export default function WeatherApp(props){
  
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultcity);
  
  function handleResponse(response){
  setWeatherData({
  ready:true,
  name:(response.data.name),
  temperature:(Math.round(response.data.main.temp)),
  description:(response.data.weather[0].description),
  icon:(response.data.weather[0].icon),
  minTemp:(Math.round(response.data.main.temp_min)),
  maxTemp:(Math.round(response.data.main.temp_max)),
  windSpeed:(Math.round(response.data.wind.speed)),
  feelsLike:(Math.round(response.data.main.feels_like)),
  humidity:(response.data.main.humidity),
  date:new Date(response.data.dt *1000)
  })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function hanldeCityChange(event) {
    setCity(event.target.value);
  }
  
  function search() {
   const apiKey="4618b7617a5cf5299e42edf3e250ff0a";
   let units= "metric"
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

   axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(position) {
    const apiKey="4618b7617a5cf5299e42edf3e250ff0a";
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    let currentUrl=`https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(currentUrl).then(handleResponse);
  }

  function getCurrentPosition() {
     navigator.geolocation.getCurrentPosition(showPosition);
    }

  
  if (weatherData.ready) {
    return(  
    <div>
      <div className="card-group">
        <div className="card todayscard">
          <Todaycard data={weatherData} />
        </div>
        <div className="card future-card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group search-city">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputtext1"
                      aria-describedby="textHelp"
                      placeholder="Enter City"
                      autocomplete="off"
                      autoFocus="on"
                      onChange={hanldeCityChange}
                    />
                  </div>
                </form>
                <div className="col-12">
                  <button className="btnCurrent" onClick={getCurrentPosition}>
                    Current
                  </button>
                  <button className="btnGo" onClick={handleSubmit}>
                    Go
                  </button>
                </div>
              </div>
            </div>
            <br />
            <Forecast city={weatherData.name} />
          </div>
        </div>
      </div>
    </div>
  )
  } else {
    search();
    getCurrentPosition();
    
    return (
        <Loader
         type="Puff"
         color="#006a71"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
        />
    )
  }
}