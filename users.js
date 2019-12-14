const ChatroomUsers = require('./models/ChatroomUsers');
const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'Username and room are required.' };
  // if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

  const userr = new ChatroomUsers({
    id:id,
    name:name,
    room:room
  });

  userr.save();

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  // ChatroomUsers.findOneAndRemove({id:id})
  // .then(() => {
  //   console.log('removed from db');
  // })
  // .catch(err =>{
  //   console.log(err);
  // });

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };