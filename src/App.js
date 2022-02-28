import "./App.css";
import WeeklyForecast from "./WeeklyForecast";
import SearchBar from "./SearchBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar defaultCity="Havana" />
      <WeeklyForecast />
      <footer> Coded by Anastasija Zlatic hosted by Netlify</footer>
    </div>
  );
}
