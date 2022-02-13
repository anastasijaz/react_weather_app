import React from "react";

export default function DayForecast(props) {
  return (
    <div className="row">
      <div className="col-3">
        <h4 className="description" id="description">
          windy
        </h4>
        <p className="currentTime">12:30</p>{" "}
        <p className="currentDate">15.01.2022</p>
      </div>

      <div className="col-3"></div>
      <div className="col-3">
        <div className="col-3">
          <p className="currentTemp" id="sun">
            20°C
          </p>
        </div>

        <div className="row">
          <div className="col-3">
            <button type="button" className="bnt-metric" id="metric-value">
              °C
            </button>
          </div>
          <div className="col-3">
            <button type="button" className="bnt-imperial" id="imperial-value">
              °F
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
