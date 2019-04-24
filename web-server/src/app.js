const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '..//public')
const port = 3000

app.use(express.static(publicPath))

app.get('/', (req, res) => {
})

app.get('/help', (req, res) => {
    res.sendFile(path.join(publicPath, '//help.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(publicPath, '//about.html'))
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Rainy with a chance of meatballs.',
        locaiton: 'Narnia'
    })
})

app.listen(port, () => console.log(`Express listening on port ${port}`))