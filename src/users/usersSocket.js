// src/users/userSocket.js

const { addUser, getUser, removeUser } = require('./users');

function configureUserSocket(io) {
    io.on('connection', (socket) => {
        console.log('A user has connected');

        socket.on('new-user', (name) => {
            const user = addUser(socket.id, name);
            console.log(`User ${name} (${socket.id}) has connected`);

            // Notify all connected users about the new user
            io.emit('users-connected', users);

            // Send a welcome message to the connected user
            socket.emit('message', 'Welcome to the chat!');
        });

        socket.on('disconnect', () => {
            const user = getUser(socket.id);
            if (user) {
                removeUser(socket.id);
                console.log(`User ${user.name} (${socket.id}) has disconnected`);

                // Notify all connected users about the user's disconnection
                io.emit('users-connected', users);
            }
        });
    });
}

module.exports = {
    configureUserSocket,
};
