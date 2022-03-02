import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <ul className="Values">
            <li className="City">{props.data.city}</li>
            <li className="Time">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
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
        <div className="col-4">
          <ul className="WeatherMain">
            <li className="Icon">
              <WeatherIcon code={props.data.icon} />
            </li>
            <img src={props.data.icon} />
            <li className="Temperature">
              {Math.round(props.data.temperature)} °C
            </li>
            <li className="Description"> {props.data.description}</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="WeatherInformation">
            <li className="Humidity">Humidity: {props.data.humidity}</li>
            <li className="Wind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
