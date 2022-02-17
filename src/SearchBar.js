import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

export default function SearchBar() {
  let [cityName, setCityName] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  //let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let key = "ad6adba1de9c56cc7cb494546cf33bc9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    //setIcon()
  }

  function updateCityName(event) {
    setCityName(event.target.value);
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-city"
          placeholder="Search your city..."
          onChange={updateCityName}
        />

        <input type="submit" className="location-city" value="search" />
      </form>
      <div className="Weather-Forecast">
        <h2 className="CityName">{cityName}</h2>
        <h4 className="description">{description}</h4>
        <h5 className="Temperature">Temperature: {temperature}°C</h5>
        <h5 className="Wind">Wind: {wind} km/h</h5>
        <h5 className="Humidity">Humidity: {humidity}</h5>
      </div>
    </div>
  );
}
