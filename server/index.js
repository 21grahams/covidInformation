const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('../database/queries');
const cors = require('cors');
const axios = require('axios');
 
//=====================
///// Middleware //////
//=====================
app.use(express.static(__dirname + '/../dist'));
// use express.json for parsing JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());
 
//=====================
///// Middleware //////
//=====================
app.get('/getStats', (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.covid19api.com/summary'
  })
  .then(response => res.send(response.data))
  .catch(err => res.send('Error with Get Request: ', err));
});


// tell server to listen on predefined port
app.listen(port, () => {
 console.log(`Graham\'s Express Server Listening on Port: ${port}`);
});
 