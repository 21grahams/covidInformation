import React from 'react';
import Area from './Area';

const Map = ({ data, handleDescription }) => {

  return (
    <div>
      {data ? data.map((location, i) => (
        <Area location={location} key={i} handleDescription={handleDescription} />
      )) : 'Loading...'}
    </div>
  )
}

export default Map;