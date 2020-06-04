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
    const data = JSON.parse(body);
    cb(null, data.ip);
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





module.exports = { fetchMyIP, fetchCoordsByIP };