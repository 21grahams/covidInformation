import React, { useState } from "react";
import commaNumber from 'comma-number';

const Area = ({ location }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (

    <div>
      <br></br>
      <h3 className="singleCountries" onClick={handleToggle} >
          {location.Country}
      </h3>

      {toggle ? (
        <>
        <br></br>
          <h5 className='textSingle'>New Confirmed Cases: <span className='numberSingle'>{commaNumber(location.NewConfirmed)}</span></h5>
          <h5 className='textSingle'>Total Confirmed Cases: <span className='numberSingle'>{commaNumber(location.TotalConfirmed)}</span></h5>
          <h5 className='textSingle'>New Deaths: <span className='numberSingle'>{commaNumber(location.NewDeaths)}</span></h5>
          <h5 className='textSingle'>Total Confirmed Deaths: <span className='numberSingle'>{commaNumber(location.TotalDeaths)}</span></h5>
          <h5 className='textSingle'>Total Confirmed Recoveries: <span className='numberSingle'>{commaNumber(location.TotalRecovered)}</span></h5>
        </>
      ) : null}
    </div>
  );
};

export default Area;
