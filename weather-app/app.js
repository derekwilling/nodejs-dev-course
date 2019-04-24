const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//
// Goal: Accept location via command line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided.
// 4. Test your work with a couple of locations.

if (process.argv[2]) {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log('Error', error)
        } else {
            // console.log('Data', data)
            forecast(data.longitude, data.latitude, (error, forecastData) => {
                if (error) {
                    return console.log('Error', error)
                } else {
                    console.log(data.location)
                    console.log(forecastData)
                }
              })
        }
    })
}




