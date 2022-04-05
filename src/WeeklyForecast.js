import React from "react";
import "./WeeklyForecast.css";
import axios from "axios";

export default function WeeklyForecast(props) {
  function handleSubmit(response) {
    console.log(response.data);
  }
  let apiKey = "ad6adba1de9c56cc7cb494546cf33bc9";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(url).then(handleSubmit);

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
