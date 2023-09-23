import { UserDataSession } from "../interfaces/user";
import { DisconnectReason, Server } from 'socket.io';
import { addUser, getUserBySocketId, isUserConnected, removeUserBySocketId } from "./users";
import { errorHandler } from "../handlers/exceptionHandler";
export const users: UserDataSession[] = [];
export function configureUserSocket(io: Server) {
    io.on('connection', (socket) => {
        socket.on('new-user', (mensaje: string) => {
            try {
                const userDataSession: UserDataSession = JSON.parse(mensaje);
                const userId = userDataSession.user.id;
                const sessionId = userDataSession.sessionData.id;
                const existUser = isUserConnected(userId);
                if (!existUser) {
                    console.log("No existe el usuario");
                    userDataSession.sessionData.socketId = socket.id;
                    const user = addUser(userDataSession);
                    socket.join(sessionId);
                } else {
                    if (existUser.sessionData.id != userDataSession.sessionData.id) {
                        //Cerrar sesión por completo
                        io.to(existUser.sessionData.socketId).emit("logout", JSON.stringify(existUser));
                    } else {
                        //Cerrar sesión por completo
                        io.to(existUser.sessionData.socketId).emit("disable-window", JSON.stringify(existUser));

                    }
                    existUser.sessionData.socketId = socket.id;
                }
                console.log("users: ", users);

            } catch (error) {
                console.log(error);
                errorHandler(error, "Error en evento new-user");
            }
        });

        socket.on('disconnect', (reason: DisconnectReason, description: any) => {
            const user = getUserBySocketId(socket.id);
            if (user) {
                removeUserBySocketId(socket.id);
            }
        });
    });
}