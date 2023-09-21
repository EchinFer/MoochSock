// src/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { configureUserSocket } = require('./users/usersSocket');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

configureUserSocket(io);
// // Handle incoming connections
// io.on('connection', (socket) => {
//     console.log('A user has connected');

//     // Handle custom events for users
//     socket.on('message', (data) => {
//         console.log('Received message:', data);
//         // You can emit events to other users here
//         // socket.emit('message', data);
//     });

//     // Handle user disconnections
//     socket.on('disconnect', () => {
//         console.log('A user has disconnected');
//     });
// });



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Socket.IO server listening on port ${PORT}`);
});