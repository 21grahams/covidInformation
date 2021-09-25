import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';
import Current from './Current';

const App = () => {

  const [data, setData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([]);

  const getAllData = () => {
    axios.get('/getStats')
      .then(res => setData(res.data))
      .catch(err => console.log('Error with Get Request: ', err));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDescription = (country) => {
    setCurrentCountry(country)
  };

  return (
    <div>
      <Current currentCountry={currentCountry} />
      <Map data={data.Countries} handleDescription={handleDescription} />
    </div>
  )
}

export default App;