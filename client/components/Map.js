import React from "react";
import Area from "./Area";
import commaNumber from 'comma-number';

const Map = ({ data, global }) => {
  return (

    <div>
      {global ? (
        <div className="totals">
          <>
            <h1 className='text'>Global Cases</h1>
            <h4 className='text'>New Confirmed Cases: <span className='numbers'>{commaNumber(global.NewConfirmed)}</span></h4>
            <h4 className='text'>New Confirmed Deaths: <span className='numbers'>{commaNumber(global.NewDeaths)}</span></h4>
            <h4 className='text'>Total Confirmed Cases: <span className='numbers'>{commaNumber(global.TotalConfirmed)}</span></h4>
            <h4 className='text'>Total Deaths: <span className='numbers'>{commaNumber(global.TotalDeaths)}</span></h4>
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
