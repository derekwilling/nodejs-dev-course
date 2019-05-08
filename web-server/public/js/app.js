console.log('Hello from client side app.js!')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=Woodstock').then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            console.log('Error: ', data.error)
        } else {
            console.log('Location: ', data.location)
            console.log('Forecast: ', data.forecast)
        }
    })
})