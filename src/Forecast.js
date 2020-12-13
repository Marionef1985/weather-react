import React, {useState} from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'
import "./Forecast.css";
import WeatherIconForecast from "./WeatherIconForecast";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";
import DayFour from "./DayFour";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
  return(
    <div>
      <section className="col-12 second-card">
        <div className="row">
          <div className="col-4 weekDays">
            Tomorrow
          </div>
            <div className="col-1">
              <WeatherIconForecast code={forecast.list[6].weather[0].icon}/>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                {Math.round(forecast.list[6].main.temp)}
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  {forecast.list[6].weather[0].main}
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              <DayOne />
            </div>
            <div className="col-1">
              <WeatherIconForecast code={forecast.list[14].weather[0].icon}/>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                {Math.round(forecast.list[14].main.temp)}
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  {forecast.list[14].weather[0].main}
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              <DayTwo />
            </div>
            <div className="col-1">
              <WeatherIconForecast code={forecast.list[22].weather[0].icon}/>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                {Math.round(forecast.list[22].main.temp)}
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  {forecast.list[22].weather[0].main}
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              <DayThree />
            </div>
            <div className="col-1">
              <WeatherIconForecast code={forecast.list[30].weather[0].icon}/>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                {Math.round(forecast.list[30].main.temp)}
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  {forecast.list[30].weather[0].main}
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              <DayFour />
            </div>
            <div className="col-1">
              <WeatherIconForecast code={forecast.list[38].weather[0].icon}/>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                {Math.round(forecast.list[38].main.temp)}
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  {forecast.list[38].weather[0].main}
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  } else {
    let apiKey = "4618b7617a5cf5299e42edf3e250ff0a";
    let units = "metric";
    let city = props.city
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrlForecast).then(handleForecastResponse);
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