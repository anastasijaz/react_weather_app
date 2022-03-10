import React from "react";

export default function TempConversion() {
  return (
    <div className="row">
      <div className="col-2">
        <input
          type="submit"
          className="bnt-metric"
          id="metric-value"
          value="°C"
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
  );
}
