const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New websocket connection.')

    socket.emit('message', generateMessage('Welcome!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('sendMessage', (message, ack) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return ack('Profanity is not allowed!')
        }

        io.emit('message', generateMessage(message))
        ack('Delivered')
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left.'))
    })

    socket.on('sendLocation', (position, ack) => {
        io.emit('locationMessage', generateMessage(`https://google.com/maps?q=${position.latitude},${position.longitude}`))
        ack()
    })
})

server.listen(port, () => {
    console.log('Server running on port ', port)
})