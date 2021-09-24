import React, { useState } from 'react';

const Area = ({ location, handleDescription }) => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <h3 onClick={handleToggle}>{location.Country}</h3>
      {toggle ? <p>New Deaths: {location.NewDeaths}</p> : null}
    </div>
  )
};

export default Area;