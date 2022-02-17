import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.Name,
      iconUrl: response.data.weather[0].icon,
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="search-form">
          <input
            type="search"
            className="search-city"
            placeholder="Search your city..."
            autofocus="on"
          />

          <input type="submit" className="location-city" value="search" />
        </form>
        <h2 className="CityName">{weatherData.city}</h2>
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
          className="float-left"
        />
        <ul className="Weather-Forecast">
          <li className="description">{weatherData.description}</li>
          <li className="Temperature">
            Temperature: {Math.round(weatherData.temperature)}°C
          </li>
          <li className="Wind">Wind: {Math.round(weatherData.wind)} km/h</li>
          <li className="Humidity">
            Humidity: {Math.round(weatherData.humidity)}
          </li>
        </ul>
      </div>
    );
  } else {
    let key = "ad6adba1de9c56cc7cb494546cf33bc9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
