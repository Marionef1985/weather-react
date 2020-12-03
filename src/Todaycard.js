import React from "react";
//import Description from "./Description";
import "./Todaycard.css";

export default function Todaycard() {
  return (
    <div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h1>
              <div className="currentcity" id="current-city">
                Barcelona
              </div>
            </h1>
          </div>
          <br />
          <br />
          <br />
          <div className="col-12">
            <div>
              <span className="currentTemp" id="current-temp">
                20
              </span>
              <span className="currentTemp">ºC</span>
            </div>
            <div className="tempdescription" id="temp-descrition">
              Sunny
            </div>
            <br />
            <div className="col-12">
               <i className="fas fa-sun"></i>
            </div>
            <br />
            <div className="row">
        <div className="col-12">
          <span className="minTemperatureToday">Min: </span>
          <span className="minTemperatureToday" id="min-temperature">
            15ºC
          </span>
          <span className="minTemperatureToday"> </span>
          <span className="maxTemperatureToday">|| Max: </span>
          <span className="maxTemperatureToday" id="max-temperature">
            22ºC
          </span>
          <span className="maxTemperatureToday"></span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <span className="minTemperatureToday">Wind Speed: </span>

          <span className="minTemperatureToday"></span>

          <span className="maxTemperatureToday" id="wind-speed">
            10km/hr{" "}
          </span>

          <span className="maxTemperatureToday"></span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <span className="minTemperatureToday">Precipitation: </span>

          <span className="minTemperatureToday"></span>

          <span className="maxTemperatureToday" id="precipitation">
            15
          </span>

          <span className="maxTemperatureToday">%</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <span className="minTemperatureToday"> Feels Like: </span>
          <span className="maxTemperatureToday" id="feels-like-answer">
            19
          </span>
          <span className="maxTemperature">ºC</span>
        </div>
        <div className="col-12">
          <span className="minTemperatureToday"> Humidity: </span>
          <span className="maxTemperatureToday" id="humidity-answer">
            50
          </span>
          <span className="humidityToday maxTemperatureToday"> % </span>
        </div>
      </div>
            <br />
            <div className="row">
              <div className="col-12">
                <button className="change" id="celcius-btn">
                  ºC
                </button>
                <span className="buttonLines"> || </span>
                <button className="change" id="farenheit-btn">
                  ºF
                </button>
                <span className="todayDate" id="todaydate"></span>
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
  );
}
