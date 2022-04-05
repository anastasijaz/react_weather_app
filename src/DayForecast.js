import React from "react";
import "./DayForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return ` ${temperature}°C `;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeeklyUpdate" id="WeeklyUpdate">
      <div className="row">
        <div className="col-2">
          <h4 className="Day"> {day()}</h4>
          <h5>
            <WeatherIcon code={props.data.weather[0].icon} size={15} />{" "}
          </h5>
          <h6>
            {minTemp()}| {maxTemp()}
          </h6>
        </div>
      </div>
    </div>
  );
}
