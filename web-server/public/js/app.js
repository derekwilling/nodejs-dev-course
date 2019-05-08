// console.log('Hello from client side app.js!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const locationInput = document.querySelector('input')
const weatherForm = document.querySelector('form')

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = locationInput.value
    // console.log(locationInput.value)
    // console.log(e.target[0].value)

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log('Error: ', data.error)
            } else {
                console.log('Location: ', data.location)
                console.log('Forecast: ', data.forecast)
            }
        })
    })

})