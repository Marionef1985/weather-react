import React, {useState} from "react";
import axios from "axios";
import "./WeatherApp.css";
import FormattedDate from "./FormattedDate";
//import Todaycard from "./Todaycard";
import Forecast from "./Forecast";
import Loader from 'react-loader-spinner'


export default function WeatherApp(props){
  const [weatherData, setweatherData] = useState({ready:false});
  function handleResponse(response){
  console.log(response.data)
  setweatherData({
  ready:true,
  name:(response.data.name),
  temperature:(Math.round(response.data.main.temp)),
  description:(response.data.weather[0].description),
  //icon:response.data.weather[0].icon,
  minTemp:(Math.round(response.data.main.temp_min)),
  maxTemp:(Math.round(response.data.main.temp_max)),
  windSpeed:(Math.round(response.data.wind.speed)),
  //precipitation:((response.data.rain.1h)*100),
  feelsLike:(Math.round(response.data.main.feels_like)),
  humidity:(response.data.main.humidity),
  date:new Date(response.data.dt *1000)
  })
  }

  if (weatherData.ready) {
    return(
    <div>
      <div className="card-group">
        <div className="card todayscard">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h1>
                  <div className="currentcity">
                    {weatherData.name}
                  </div>
                </h1>
              </div>
              <br />
              <br />
              <br />
              <div className="col-12">
                <div>
                  <span className="currentTemp">
                    {weatherData.temperature}
                  </span>
                  <span className="currentTemp">
                    ºC
                  </span>
                </div>
                <div className="tempdescription">
                  {weatherData.description}
                </div>
                <br />
                <div className="col-12">
                  {weatherData.icon}
                  <image src="" alt="" class="todayIcon"></image>
                  <i className="fas fa-sun todayIcon"></i>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Min: </span>
                    <span className="minTemperatureToday">
                      {weatherData.minTemp}ºC
                    </span>
                    <span className="minTemperatureToday"> </span>
                    <span className="maxTemperatureToday">|| Max: </span>
                    <span className="maxTemperatureToday">
                      {weatherData.maxTemp}ºC
                    </span>
                    <span className="maxTemperatureToday"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Wind Speed: </span>
                    <span className="minTemperatureToday"></span>
                    <span className="maxTemperatureToday">
                      {weatherData.windSpeed}km/hr{" "}
                    </span>
                    <span className="maxTemperatureToday"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Precipitation: </span>
                    <span className="minTemperatureToday"></span>
                    <span className="maxTemperatureToday">
                      10
                    </span>
                    <span className="maxTemperatureToday">%</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday"> Feels Like: </span>
                    <span className="maxTemperatureToday">
                      {weatherData.feelsLike}
                    </span>
                    <span className="maxTemperature">ºC</span>
                  </div>
                  <div className="col-12">
                    <span className="minTemperatureToday"> Humidity: </span>
                    <span className="maxTemperatureToday">
                      {weatherData.humidity}
                    </span>
                    <span className="humidityToday maxTemperatureToday"> % </span>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <span className="buttonLines">
                      <FormattedDate date={weatherData.date}/>
                      </span>
                    <button className="change">
                      ºC
                    </button>
                    <span className="buttonLines"> || </span>
                    <button className="change">
                      ºF
                    </button>
                    <span className="todayDate"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a
                      href="https://github.com/Marionef1985/weather-react"
                      target="_blank"
                      rel="noreferrer"
                      className="myAccount"
                      >
                      Open-source code
                    </a>
                    <span className="myName"> by Marione Fiszman </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card future-card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form id="searchCity">
                  <div className="form-group search-city">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputtext1"
                      aria-describedby="textHelp"
                      placeholder="Enter City"
                      autocomplete="off"
                      autoFocus="on"
                    />
                  </div>
                </form>
                <div className="col-12">
                  <button className="btnCurrent">
                    Current
                  </button>
                  <button className="btnGo">
                    Go
                  </button>
                </div>
              </div>
            </div>
            <br />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  ) 
  } else {
  const apiKey="4618b7617a5cf5299e42edf3e250ff0a";
  const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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