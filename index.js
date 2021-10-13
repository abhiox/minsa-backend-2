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


});


const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});


// const { Server } = require("socket.io");

// const io = new Server({ /* options */ });

// io.on("connection", (socket) => {
//   // ...
//   console.log("connected a socket");
// });

// io.listen(3000);

