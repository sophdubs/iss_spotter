const request = require('request');

const fetchMyIP = function(cb) {
  request('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg =  `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      cb(Error(msg), null);
      return;
    }
    const data = JSON.parse(body).ip;
    cb(null, data);
  });
};

const fetchCoordsByIP = function(ip, cb) {
  request(`https://ipvigilante.com/${ip}`, (err, response, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg =  `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      cb(Error(msg), null);
      return;
    }
    let data = JSON.parse(body);
    let coords = {};
    coords.latitude = data.data.latitude;
    coords.longitude = data.data.longitude;
    cb(null, coords);
  });
};


const fetchISSFlyOverTimes = function(coords, cb) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (err, response, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg =  `Status Code ${response.statusCode} when fetching ISS fly over times. Response: ${body}`;
      cb(Error(msg), null);
      return;
    }
    const data = JSON.parse(body).response;
    cb(null, data);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };