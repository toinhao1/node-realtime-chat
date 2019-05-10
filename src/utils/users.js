const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Username and room are required!'
    };
  }

  // Check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });
  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
    };
  }
  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// Remove User
const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// Get User
const getUser = id => {
  const currentUser = users.find(user => user.id === id);
  return currentUser;
};

// Get list of users in the current room
const getUsersInRoom = room => {
  const inRoom = users.filter(user => user.room === room);
  return inRoom;
};

module.exports = { addUser, getUser, removeUser, getUsersInRoom };
