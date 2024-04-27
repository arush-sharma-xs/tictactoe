import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { UserManager } from "./userManager.js";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const userManager = new UserManager();

io.on("connection", (socket) => {
  console.log("a user connected");
  
  socket.on("start_game", (user) => {
    userManager.addUser(user, socket);
  });

});


server.listen(3000, () => {
  console.log("listening on port 3000.");
});
