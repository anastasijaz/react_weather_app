import React, { useState } from "react";
import axios from "axios";

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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-city"
          placeholder="Search your city..."
          onChange={updateCityName}
        />

        <input type="submit" className="location-city" value="search" />
      </form>

      <h2>{cityName}</h2>
      <h2>{description}</h2>
      <h2>Temperature: {temperature}°C</h2>
      <h2>Wind: {wind} km/h</h2>
      <h2>Humidity: {humidity}</h2>
    </div>
  );
}
