import "./App.css";
import DayForecast from "./DayForecast";
import SearchBar from "./SearchBar";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
      <DayForecast />
    </div>
  );
}
