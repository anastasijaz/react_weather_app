import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
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
          <TempConversion />
        </div>
        <div className="col-4">
          <div className="Icon">
            <WeatherIcon code={props.data.iconUrl} size={52} />
          </div>
          <ul className="WeatherMain">
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
