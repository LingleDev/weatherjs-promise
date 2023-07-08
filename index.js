const weather = require('weather-js');

/**
 * Get weather info in a Promise
 * @param {Object} options Query options
 * @param {String} options.search Where to get the weather from
 * @param {String} options.degreeType Degree type
 * @returns {Promise<Array>} Details about the weather
 */
module.exports = (options={}) => {
  return new Promise((res,rej) => {
    if (typeof options.search == "undefined") {
      rej(new Error(`You must input search parameters`))

      return;
    }

    if (typeof options.degreeType == "undefined") {
      options.degreeType = "F"
    }

    weather.find({ search: options.search, degreeType: options.degreeType }, (err, results) => {
      if (err) rej(err);

      res(results)
    })
  })
}