import React from "react";
import Area from "./Area";
import commaNumber from 'comma-number';

const Map = ({ data, global }) => {
  return (

    <div>
      {global ? (
        <div className="totals">
          <>
            <h1>Global Cases</h1>
            <h4>New Confirmed Cases: {commaNumber(global.NewConfirmed)}</h4>
            <h4>New Confirmed Deaths: {commaNumber(global.NewDeaths)}</h4>
            <h4>Total Confirmed Cases: {commaNumber(global.TotalConfirmed)}</h4>
            <h4>Total Deaths: {commaNumber(global.TotalDeaths)}</h4>
          </>
        </div>
      ) : null}

      {data
        ? data.map((location, i) => <Area location={location} key={i} />)
        : "Loading..."}
    </div>
  );
};

export default Map;
