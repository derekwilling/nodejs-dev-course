const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/31c6091b3e385f767a6b40c9c80c03aa/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Error processing darksky request!')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else { 
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is ${response.body.currently.precipProbability} chance of rain.`)
//     }
// })

geocode('Atlanta', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})