import express from 'express';
import http from 'http';
import { Server } from "socket.io";
import { configureUserSocket } from './users/usersSocket';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(cors());

configureUserSocket(io); 

const PORT = process.env.PORT || 5011;
server.listen(PORT, () => {
    console.log(`Socket.IO server listening on port ${PORT}`);
});