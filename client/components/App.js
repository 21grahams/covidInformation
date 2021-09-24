import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';

const App = () => {

  const [data, setData] = useState([]);

  const getAllData = () => {
    axios.get('/getStats')
      .then(res => setData(res.data))
      .catch(err => console.log('Error with Get Request: ', err));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDescription = (country) => {
    console.log('working: ', country)
  }

  return (
    <div>
      <Map data={data.Countries} handleDescription={handleDescription} />
    </div>
  )
}

export default App;