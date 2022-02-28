import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import { TailSpin } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function SearchBar(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: response.data.weather[0].icon,
    });
  }
  function search() {
    let key = "ad6adba1de9c56cc7cb494546cf33bc9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-city"
            placeholder="Search your city..."
            autofocus="on"
            onChange={handleCityChange}
          />

          <input type="submit" className="location-city" value="search" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <TailSpin color="#f03f35" height={80} width={80} />;
  }
}
