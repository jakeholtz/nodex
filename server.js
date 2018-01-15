var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
app.listen(3000, () => console.log("Listening in on port 3000"));

var client = require('path').join(__dirname + '/client.html');
var key = require('./key.js');

var geoAPIpath = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + key;
app.get('/', (req, res) => res.sendFile(client));

request.post(
  { url: geoAPIpath },
  function(err, res, body){
    console.log(err ? "Error connecting to Google's API" : body);
  }
)