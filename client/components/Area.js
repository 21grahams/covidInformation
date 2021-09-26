import React, { useState } from "react";
import commaNumber from 'comma-number';

const Area = ({ location }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h3>
        <span className="singleCountries" onClick={handleToggle}>
          {location.Country}
        </span>
      </h3>
      {toggle ? (
        <>
          <h5 className='text'>New Confirmed Cases: <span className='numbers'>{commaNumber(location.NewConfirmed)}</span></h5>
          <h5 className='text'>Total Confirmed Cases: <span className='numbers'>{commaNumber(location.TotalConfirmed)}</span></h5>
          <h5 className='text'>New Deaths: <span className='numbers'>{commaNumber(location.NewDeaths)}</span></h5>
          <h5 className='text'>Total Confirmed Deaths: <span className='numbers'>{commaNumber(location.TotalDeaths)}</span></h5>
          <h5 className='text'>Total Confirmed Recoveries: <span className='numbers'>{commaNumber(location.TotalRecovered)}</span></h5>
        </>
      ) : null}
    </div>
  );
};

export default Area;
