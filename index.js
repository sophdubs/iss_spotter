const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log('It didn\'t work!', err);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP(TEMPIP, (err, data) => {
//   if (err) {
//     console.log('It didn\'t work!', err);
//     return;
//   }
//   console.log('It worked! Returned Coords:', data);
// });

// let tempCoords = { latitude: '43.71350', longitude: '-79.38870' };

// fetchISSFlyOverTimes(tempCoords, (err, data) => {
//   if (err) {
//     console.log('It didn\'t work!', err);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', data);
// });