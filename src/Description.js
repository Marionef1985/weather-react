import React from "react";
import "./Description.css";
export default function Description() {
  return (
    <div>
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
    </div>
  );
}
