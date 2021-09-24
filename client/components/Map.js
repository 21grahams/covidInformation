import React from 'react';
import Area from './Area';

const Map = ({ data }) => {

  return (
    <div>
      {data ? data.map((location, i) => (
        <Area location={location.Country} key={i} />
      )) : 'Loading...'}
    </div>
  )
}

export default Map;