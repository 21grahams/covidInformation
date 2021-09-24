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

  return (
    <div>
      <Map data={data.Countries} />
    </div>
  )
}

export default App;