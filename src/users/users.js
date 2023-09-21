// src/users/users.js

const users = [];

function addUser(id, name) {
  const user = { id, name };
  users.push(user);
  return user;
}

function getUser(id) {
  return users.find((user) => user.id === id);
}

function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  addUser,
  getUser,
  removeUser,
};