import React from "react";
import "./Todaycard.css";
import FormattedDate from "./FormattedDate";

export default function Todaycard(props){
    return (
      <div className="weatherinfo">
        <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h1>
                  <div className="currentcity">
                    {props.data.name}
                  </div>
                </h1>
              </div>
              <br />
              <br />
              <br />
              <div className="col-12">
                <div>
                  <span className="currentTemp">
                    {props.data.temperature}
                  </span>
                  <span className="currentTemp">
                    ºC
                  </span>
                </div>
                <div className="tempdescription">
                  {props.data.description}
                </div>
                <br />
                <div className="col-12 clearfix">
                  <image src={props.data.iconUrl} alt={props.data.description} className="todayIcon"/>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Min: </span>
                    <span className="minTemperatureToday">
                      {props.data.minTemp}ºC
                    </span>
                    <span className="maxTemperatureToday">|| Max: </span>
                    <span className="maxTemperatureToday">
                      {props.data.maxTemp}ºC
                    </span>
                    <span className="maxTemperatureToday"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Wind Speed: </span>
                    <span className="maxTemperatureToday">
                      {props.data.windSpeed}km/hr{" "}
                    </span>
                    <span className="maxTemperatureToday"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday">Precipitation: </span>
                    <span className="maxTemperatureToday">
                      {props.data.precipitation}%
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="minTemperatureToday"> Feels Like: </span>
                    <span className="maxTemperatureToday">
                      {props.data.feelsLike}
                    </span>
                    <span className="maxTemperature">ºC</span>
                  </div>
                  <div className="col-12">
                    <span className="minTemperatureToday"> Humidity: </span>
                    <span className="maxTemperatureToday">
                      {props.data.humidity}
                    </span>
                    <span className="humidityToday maxTemperatureToday"> % </span>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <span className="buttonLines">
                      <FormattedDate date={props.data.date}/>
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
    )
}