require('dotenv').config();
const request = require('request');

let getWeather = (lat, lng, callback) => {
  const key = process.env.WEATHER_KEY;

  request({
    url: `https://api.forecast.io/forecast/${key}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
