import React, {useState} from "react";
import axios from "axios";
import "./WeatherApp.css";
import Todaycard from "./Todaycard";
import Forecast from "./Forecast";
import Loader from 'react-loader-spinner'



export default function WeatherApp(props){
  
  const [weatherData, setweatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultcity)
  
  function handleResponse(response){
  setweatherData({
  ready:true,
  name:(response.data.name),
  temperature:(Math.round(response.data.main.temp)),
  description:(response.data.weather[0].description),
  icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  minTemp:(Math.round(response.data.main.temp_min)),
  maxTemp:(Math.round(response.data.main.temp_max)),
  windSpeed:(Math.round(response.data.wind.speed)),
  //precipitation:(response.data.list[0].pop)*100),
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
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
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
                  <button className="btnCurrent">
                    Current
                  </button>
                  <button className="btnGo" onClick={handleSubmit}>
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
    search();
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