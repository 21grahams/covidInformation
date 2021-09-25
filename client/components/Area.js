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
          <h5>New Deaths: {commaNumber(location.NewDeaths)}</h5>
          <h5>Total Confirmed Cases: {commaNumber(location.TotalConfirmed)}</h5>
          <h5>Total Confirmed Deaths: {commaNumber(location.TotalDeaths)}</h5>
          <h5>Total Confirmed Recoveries: {commaNumber(location.TotalRecovered)}</h5>
        </>
      ) : null}
    </div>
  );
};

export default Area;
