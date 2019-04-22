const request = require('request')

// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/31c6091b3e385f767a6b40c9c80c03aa/' + latitude + ',' + longitude 

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('There was a problem getting the forecast!', undefined)
        } else if  (response.body.code === 400) {
            callback('The co-ordinates provided were invalid.', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is ${response.body.currently.precipProbability} chance of rain.`)
        }
    })
}

module.exports = forecast
