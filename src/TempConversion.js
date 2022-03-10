import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("Celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit = "Fahrenheit";
  }
  if (unit === "Celcius") {
    return (
      <ul>
        <li className="Temperature">{Math.round(props.data.temperature)} °C</li>
        <div className="row">
          <div className="col-2">
            <input
              type="submit"
              className="bnt-metric"
              id="metric-value"
              value="°C"
              onClick={convertToFahrenheit}
            />
          </div>
          <div className="col-2">
            <input
              type="button"
              className="bnt-imperial"
              id="imperial-value"
              value="°F"
            />
          </div>
        </div>
      </ul>
    );
  } else {
    return "°F";
  }
}
