import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return(
    <div>
      <div>
        <span className="currentTemp">
          {props.celsius}
        </span>
        <span>
          <span className="celsius">ºC</span><span className="unitLine">|</span><a href="/" onClick={showFahrenheit} className="unit">ºF</a>
        </span>
      </div>
    </div>
    )
  } else {
    let fahrenheit = (props.celsius*9)/5 + 32;
    return (
    <div>
      <div>
        <span className="currentTemp">
          {Math.round(fahrenheit)}
        </span>
        <span className="unit unitChange">
          <a href="/" onClick={showCelsius} className="unit">ºC</a><span className="unitLine">|</span><span className="celsius">ºF</span>
        </span>
      </div>
    </div>
    );
  }
}