import React, { useState, useEffect } from "react";
import "./WeeklyForecast.css";
import axios from "axios";
import DayForecast from "./DayForecast";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleSubmit(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "ad6adba1de9c56cc7cb494546cf33bc9";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleSubmit);
  }
  if (loaded) {
    return (
      <div className="WeeklyForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DayForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
