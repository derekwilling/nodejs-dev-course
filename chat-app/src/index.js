const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

let count = 0

io.on('connection', (socket) => {
    console.log('New websocket connection.')

    socket.emit('countUpdated', count)

    socket.on('increment', () =>{
        count++
        // socket.emit('countUpdated', count)
        io.emit('countUpdated', count)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(port, () => {
    console.log('Server running on port ', port)
})