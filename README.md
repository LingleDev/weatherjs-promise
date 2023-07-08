# Weatherjs-Promise
A Promises wrapper for the [weather-js](https://npmjs.com/package/weather-js) npm module.

# Installation

`npm install weatherjs-promise --save`

# Usage

```js
const weather = require('weatherjs-promise');

// search parameter is a zip code, city name, etc
// degreeType is F (Fahrenheit) or C (Celsius)

weather({ search: "Los Angeles, CA", degreeType: "F" })
.then(results => {
  console.log(results)
})
.catch(err => {
  console.log(err)
})

```