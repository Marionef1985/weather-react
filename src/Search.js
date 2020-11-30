import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <form id="searchCity">
            <div className="form-group search-city">
              <input
                type="text"
                className="form-control"
                id="exampleInputtext1"
                aria-describedby="textHelp"
                placeholder="Search City"
                autocomplete="off"
              />
            </div>
          </form>
          <div className="col-12">
            <button className="btnCurrent" id="btn-current">
              Current
            </button>
            <button className="btnGo" id="btn-go">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
