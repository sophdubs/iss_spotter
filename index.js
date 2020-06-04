const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log('It didn\'t work!', err);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

const TEMPIP = '174.114.209.215';

fetchCoordsByIP(TEMPIP, (err, data) => {
  if (err) {
    console.log('It didn\'t work!', err);
    return;
  } else {
    console.log('It worked! Returned Coords:', data);
    return;
  }
});