import React from "react";
import "./DayForecast.css";

export default function DayForecast(props) {
  return (
    <div className="row">
      <div className="col-3">
        <ul className="Times">
          <li className="Time">12:30</li>
          <li className="Date">15.03.2022</li>
        </ul>
      </div>

      <div className="col-3">
        <div className="row">
          <div className="col-2">
            <input
              type="submit"
              className="bnt-metric"
              id="metric-value"
              value="°C"
            />
          </div>
          <div className="col-2">
            <input
              type="button"
              className="bnt-imperial"
              id="imperial-value"
              value="°F"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
