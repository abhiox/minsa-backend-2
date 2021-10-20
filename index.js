const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // with every request, there should a unit, passcode, loginAs received by server
  // initial orders
  // 
  console.log('server connected');

  socket.emit('hello', "world");

  socket.on("initial orders", (loginInfo, orders) => {
    socket.broadcast.emit("initial orders", loginInfo, orders);
  });

  socket.on("message", (loginInfo, message) => {
    socket.broadcast.emit("message", loginInfo, message);
  });


});


const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
