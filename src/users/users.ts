import { UserDataSession } from "../interfaces/user";
import { users } from "./usersSocket";

function addUser(newUser: UserDataSession) {
    users.push(newUser);
    return newUser;
}

function getUserById(id: number) {
    return users.find((user) => user.user.id === id);
}

function getUserBySocketId(id: string) {
    return users.find((user) => user.sessionData.socketId === id);
}

function removeUserBySocketId(id: string) {
    const index = users.findIndex((user) => user.sessionData.socketId === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

function isUserConnected(id: number): UserDataSession | undefined {
    const findUser = users.find(user => user.user.id == id);
    return findUser;
}

export {
    addUser,
    getUserById,
    getUserBySocketId,
    removeUserBySocketId,
    isUserConnected
}