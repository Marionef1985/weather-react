import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return(
    <div>
      <section className="col-12 second-card">
        <div className="row">
          <div className="col-4 weekDays">
            Tomorrow
          </div>
            <div className="col-1">
              <i className="fas fa-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                18
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  Sunny
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              Monday
            </div>
            <div className="col-1">
              <i className="fas fa-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                22
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  Sunny
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              Tuesday
            </div>
            <div className="col-1">
              <i class="fas fa-cloud-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                16
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  Cloudy
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              Wednesday
            </div>
            <div className="col-1">
              <i class="fas fa-cloud-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                18
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  Cloudy
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays">
              Thursday
            </div>
            <div className="col-1">
              <i class="fas fa-cloud-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature">
                15
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature">
                  {" "}
                  Cloudy
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}