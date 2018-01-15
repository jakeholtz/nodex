var app = angular.module('angularApp', [ ]);

var data = {
 "location": {
  "lat": 37.837959,
  "lng": -122.28240210000001
 },
 "accuracy": 2024.0
}

var lat = data.location.lat.toFixed(2);
var lng = data.location.lng.toFixed(2);

app.controller('angularController', function(){
  this.data = data;
  this.lat = lat;
  this.lng = lng;
})