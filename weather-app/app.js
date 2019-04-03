const request = require('request')

const url = 'https://api.darksky.net/forecast/31c6091b3e385f767a6b40c9c80c03aa/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Error processing darksky request!')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else { 
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is ${response.body.currently.precipProbability} chance of rain.`)
    }
})

// Geocoding
const mapURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Woodstock%20GA.json?access_token=pk.eyJ1IjoiZGlydHlzb2MiLCJhIjoiY2p1MW1rbXp2MDM3djQzbG8wZDMweWJrcyJ9.Ci4FbZRJdLzZ1hZ96meH-w&limit=1"
request({url: mapURL, json: true}, (error, response) => {
    if (error) {
        console.log('Error accessing mapbox api!')
    } else if (response.body.features.length === 0) {
        console.log('Location not found with mapbox!')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})