const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Atlanta', (error, data) => {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Data', data)
    }
})

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Data', data)
    }
  })