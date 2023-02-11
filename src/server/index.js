/* import {useStore} from "vuex"; */

//const { useStore } = require('vuex');

/* 
const app = express();
const http = require('http');
const server = http.createServer(app);
const  { Server } = require('socket.io');

server.listen(3001, () => console.log("Escuchando el puerto 3001"));
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true
    }
}); */
const express = require('express');

const {createServer} = require("http");
const {Server} = require("socket.io");
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: '*',
        credentials: true
    }
})

app.listen(3001, () => console.log("Escuchando el puerto 3001"))

io.on('connection', (socket) => {
    console.log(`El usuario ${socket.id} se ha conectado`);
    socket.on('disconnect', (socket) => {
        console.log(`El usuario ${socket.id} se ha desconectado`);
    })
    
    socket.on('newMessage', (data) => {
        console.log(`El usuario ${socket.id} ha enviado un mensaje`);
        io.sockets.emit('new-message', data)
        console.log(data);
    })
})


