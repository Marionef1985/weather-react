import React from "react";
import Search from "./Search";
import "./Futurecard.css";

export default function Futurecard() {
  return (
    <div>
      <div className="card-body">
        <Search />
        <br />
        <section className="col-12 second-card">
          <div className="row">
            <div className="col-4 weekDays">Tomorrow</div>
            <div className="col-1">
              <image
                src=""
                alt=""
                className="futureDatesIcons"
                id="icon-right-card-day-one"
              ></image>
              <i className="fas fa-sun icon-right" id="icon-id"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature" id="max-temp-day-one">
                18
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature" id="description-day-one">
                  {" "}
                  Sunny
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays" id="day-two">
              Monday
            </div>
            <div className="col-1">
              <image
                src=""
                alt=""
                className="futureDatesIcons"
                id="icon-right-card-day-two"
              ></image>
              <i className="fas fa-sun icon-right" id="icon-id"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature" id="max-temp-day-two">
                22
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature" id="description-day-two">
                  {" "}
                  Sunny
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays" id="day-three">
              Tuesday
            </div>
            <div className="col-1">
              <image
                src=""
                alt=""
                className="futureDatesIcons"
                id="icon-right-card-day-three"
              ></image>
              <i class="fas fa-cloud-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature" id="max-temp-day-three">
                16
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature" id="description-day-three">
                  {" "}
                  Cloudy
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays" id="day-four">
              Wednesday
            </div>
            <div className="col-1">
              <image
                src=""
                alt=""
                className="futureDatesIcons"
                id="icon-right-card-day-four"
              ></image>
              <i class="fas fa-cloud-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature" id="max-temp-day-four">
                18
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature" id="description-day-four">
                  {" "}
                  Cloudy
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 weekDays" id="day-five">
              Thursday
            </div>
            <div className="col-1">
              <image
                src=""
                alt=""
                className="futureDatesIcons"
                id="icon-right-card-day-five"
              ></image>
              <i class="fas fa-cloud-sun icon-right"></i>
            </div>
            <div className="col-7 minMaxFutureDays">
              <span className="minTemperature">Temp: </span>
              <span className="maxTemperature" id="max-temp-day-five">
                15
              </span>
              <span className="maxTemperature">ºC</span>
              <div className="minTemperature">
                Forecast:
                <span className="maxTemperature" id="description-day-five">
                  {" "}
                  Cloudy
                </span>
                <span className="maxTemperature"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
