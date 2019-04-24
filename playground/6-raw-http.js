const https = require('https')
const url = 'https://api.darksky.net/forecast/31c6091b3e385f767a6b40c9c80c03aa/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
        // console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (e) => {
    console.log(e.message)
})

request.end()