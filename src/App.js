import "./App.css";
import DayForecast from "./DayForecast";
import WeeklyForecast from "./WeeklyForecast";
import SearchBar from "./SearchBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
      <DayForecast />
      <WeeklyForecast />
    </div>
  );
}
