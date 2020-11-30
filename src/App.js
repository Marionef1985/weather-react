import React from "react";
import "./App.css";
import Todaycard from "./Todaycard";
import Futurecard from "./Futurecard";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card-group">
          <div className="card todayscard">
            <Todaycard />
          </div>
          <div className="card future-card">
            <Futurecard />
          </div>
        </div>
      </div>
    </div>
  );
}
