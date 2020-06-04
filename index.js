const { nextISSTImesForMyLocation } = require('./iss');

nextISSTImesForMyLocation((err, flyTimes) => {
  if (err) {
    return console.log('It didn\'t work!', err);
  } else {
    flyTimes.forEach(flyTime => {
      const date = new Date(0);
      date.setUTCSeconds(flyTime.risetime);
      const duration = flyTime.duration;
      console.log(`Next pass at ${date} for ${duration} seconds!`);
    });
  }
});