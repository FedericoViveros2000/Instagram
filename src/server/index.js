const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const  { Server } = require('socket.io');
const io = require('socket.io')(http, {
    cors: {
        origins: ["http://localhost:3000"]
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hola socket io</h1>')
})

io.on('connection', (socket) => {
    console.log(`El usuario ${socket.id} se ha conectado`);
    socket.on('disconnect', (socket) => {
        console.log(`El usuario ${socket.id} se ha desconectado`);
    })
})

server.listen(3001, () => console.log("Escuchando el puerto 3001"));