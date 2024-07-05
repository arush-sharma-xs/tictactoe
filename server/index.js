import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { UserManager } from "./userManager.js";
import { RoomManager } from "./roomManager.js";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const userManager = new UserManager();
const roomManager = new RoomManager();

io.on("connection", (socket) => {
  console.log("a user connected");
  
  socket.on("start_game", (user) => {
    userManager.addUser(user, socket);
  });

  socket.on("updateBoard", (mark, index, roomId) => {
      roomManager.updateBoard(mark, index, roomId);
  })

});


server.listen(3000, () => {
  console.log("listening on port 3000.");
});
