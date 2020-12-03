import React from "react";
//import Todaycard from "./Todaycard";
//import Futurecard from "./Futurecard";
import "./WeatherApp.css";
import Forecast from "./Forecast";

export default function WeatherApp(){
  return(
    <div>
      <div className="card-group">
        <div className="card todayscard">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h1>
                  <div className="currentcity">
                    Barcelona
                  </div>
                </h1>
              </div>
              <br />
              <br />
              <br />
              <div className="col-12">
                <div>
                  <span className="currentTemp">
                    20
                  </span>
                  <span className="currentTemp">
                    ºC
                  </span>
                </div>
                <div className="tempdescription">
                  Sunny
                </div>
                <br />
                <div className="col-12">
                  <i className="fas fa-sun todayIcon"></i>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Min: </span>
                    <span className="minTemperatureToday">
                      15ºC
                    </span>
                    <span className="minTemperatureToday"> </span>
                    <span className="maxTemperatureToday">|| Max: </span>
                    <span className="maxTemperatureToday">
                      22ºC
                    </span>
                    <span className="maxTemperatureToday"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Wind Speed: </span>
                    <span className="minTemperatureToday"></span>
                    <span className="maxTemperatureToday">
                      10km/hr{" "}
                    </span>
                    <span className="maxTemperatureToday"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Precipitation: </span>
                    <span className="minTemperatureToday"></span>
                    <span className="maxTemperatureToday">
                      15
                    </span>
                    <span className="maxTemperatureToday">%</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday"> Feels Like: </span>
                    <span className="maxTemperatureToday">
                      19
                    </span>
                    <span className="maxTemperature">ºC</span>
                  </div>
                  <div className="col-12">
                    <span className="minTemperatureToday"> Humidity: </span>
                    <span className="maxTemperatureToday">
                      50
                    </span>
                    <span className="humidityToday maxTemperatureToday"> % </span>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
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
}