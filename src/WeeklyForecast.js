import React from "react";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <div className="WeeklyUpdate" id="WeeklyUpdate">
      <div className="row">
        <div className="col-2">
          <h4 className="Day">Monday</h4>
          <h5>Icon</h5>
          <h6>6°C | 9°C</h6>
        </div>

        <div className="col-2">
          <h4 className="Day">Tuesday</h4>
          <h5>Icon</h5>
          <h6>6°C | 9°C</h6>
        </div>

        <div className="col-2">
          <h4 className="Day">Wednesday</h4>
          <h5>Icon</h5>
          <h6>6°C | 9°C</h6>
        </div>

        <div className="col-2">
          <h4 className="Day">Thursday</h4>
          <h5>Icon</h5>
          <h6>6°C | 9°C</h6>
        </div>

        <div className="col-2">
          <h4 className="Day">Friday</h4>
          <h5>Icon</h5>
          <h6>6°C | 9°C</h6>
        </div>
      </div>
    </div>
  );
}
