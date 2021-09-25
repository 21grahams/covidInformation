import React, { useState } from 'react';

const Area = ({ location, handleDescription }) => {

  return (
    <div>
      <h3 onClick={() => handleDescription(location.Country)}>{location.Country}</h3>
    </div>
  )
};

export default Area;