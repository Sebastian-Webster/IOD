const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//io.emit sends a message to all connected sockets
//socket.broadcast.emit sends to all sockets except the initiating socket
//socket.emit sends to only the initiating socket

const names = new Map();

io.on('connection', (socket) => {
    console.log(io.sockets.sockets.size)
    console.log('A user connected.')
    names.set(socket.id, socket.id)
    socket.broadcast.emit('person joined', {message: `${names.get(socket.id)} has joined the chatroom`, onlineUsers: io.sockets.sockets.size})
    socket.emit('online users', io.sockets.sockets.size)
    socket.emit('get name', socket.id)

    socket.on('disconnect', () => {
        console.log('User disconnected')
        socket.broadcast.emit('person left', {message: `${names.get(socket.id)} left the chatroom.`, onlineUsers: io.sockets.sockets.size})
    })

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
        socket.broadcast.emit('chat message', {msg, name: names.get(socket.id)})
    })

    socket.on('change name', (name) => {
        if (typeof name === 'string') {
            names.set(socket.id, name)
            socket.emit('get name', name)
        } else {
            socket.emit('error', 'name must only be text')
        }
    })
})

server.listen(3000, () => {
    console.log('Listening on *:3000')
})