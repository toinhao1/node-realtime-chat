const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

// Path to views
const pubDirectory = path.join(__dirname, '../public');

app.use(express.static(pubDirectory));

let welcomeMessage = 'Welcome!';

io.on('connection', socket => {
  console.log('New websocket connection');

  socket.emit('message', welcomeMessage);

  socket.on('sendMessage', message => {
    io.emit('message', message);
  });
});

server.listen(port, () => {
  console.log('Server is up on port ' + port);
});