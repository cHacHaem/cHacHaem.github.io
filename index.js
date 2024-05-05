// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static('public'));

// Chatroom


io.on('connection', function (socket) {
  let updates = {}
  socket.on('disconnect', function (stuff) {
  });
  socket.on('player update', function (data2) {
    updates[data2.id] = data2
    updates[data2.id].timestamp = Date.now()
    console.log(data2)
  })
  setInterval(()=>{
    Object.keys(updates).forEach((key)=>{
      socket.broadcast.emit("player update", updates[key])
    })
  }, 60/1000)
  socket.on('chat message', function (data2) {
    socket.broadcast.emit("chat message", data2)
    console.log(data2)
  })
});