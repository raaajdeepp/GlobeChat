import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getRecieverSocketId(userId) {
  return userSocketMap[userId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  const userId = socket.handshake.query.userId;
  if(userId) {
    userSocketMap[userId] = socket.id;
  }

  //  broadcasts to ALL connected clients the updated list of online users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));  //updates the list again
  })
});

export { io, app, server };