import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp"
//import Todaycard from "./Todaycard";
//import Futurecard from "./Futurecard";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultcity="New York"/>
      </div>
    </div>
  );
}
