const express = require("express");
const app = express();
const port = 3000;
const db = require("../database/queries");
const cors = require("cors");
const axios = require("axios");
//=====================
///// Middleware //////
//=====================
app.use(express.static(__dirname + "/../dist"));
// use express.json for parsing JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());
//=====================
///// Middleware //////
//=====================
app.get("/getStats", (req, res) => {
  axios({
    method: "get",
    url: "https://api.covidtracking.com/v1/us/daily.json",
  })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send("Error with Get Request: ", err));
});

app.post("/userInfo", (req, res) => {
  let userQuery = [req.body.name, req.body.email];
  db.postInfo(userQuery, (err, results) => {
    if (err) {
      res.status(404).send("Error with Post Request");
    } else {
      res.status(201).send("Posted!");
    }
  });
});

// tell server to listen on predefined port
app.listen(port, () => {
  console.log(`Graham\'s Express Server Listening on Port: ${port}`);
});
