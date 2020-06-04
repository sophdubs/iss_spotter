const { nextISSTimesForMyLocation } = require('./iss_promised');

const printFlyTimes = function(flyTimes) {
  flyTimes.forEach(flyTime => {
    const date = new Date(0);
    date.setUTCSeconds(flyTime.risetime);
    const duration = flyTime.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then(flyTimes => printFlyTimes(flyTimes))
  .catch(error => console.log('It didn\'t work!', error.message));