const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('../database/queries');
const cors = require('cors');
 
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
  db.getStats((err, results) => {
    if (err) {
      res.status(404).send('Error with Get Request: ', err)
    } else {
      res.status(200).send(results.rows)
    };
  });
});


// tell server to listen on predefined port
app.listen(port, () => {
 console.log(`Graham\'s Express Server Listening on Port: ${port}`);
});
 