const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3000

// Define paths for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Handlebars Configuration
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Configure static directory to serve
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Derek Willingham'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'You need help!',
        name: 'Derek Willingham'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Derek Willingham'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Rainy with a chance of meatballs.',
        locaiton: 'Narnia'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        message: 'Sorry, that help page was not found!',
        name: 'Derek Willingham'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message:`We couldn't locate that page! Sorry!`,
        name: 'Derek Willingham'
    }) 
})

app.listen(port, () => console.log(`Express listening on port ${port}`))