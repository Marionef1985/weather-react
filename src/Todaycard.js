import React from "react";
import Description from "./Description";
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
              <i class="wi wi-owm-01d"></i>
            </div>
            <br />
            <Description />
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
