import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("Celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("Celcius");
  }
  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "Celcius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C|{""}{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
