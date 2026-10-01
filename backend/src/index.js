import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://0.0.0.0:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) return true;

  if (allowedOrigins.includes(origin)) return true;

  const isLocalNetworkOrigin = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3})(?::\d+)?$/.test(origin);
  const isVercelFrontend = /^https:\/\/.*\.vercel\.app$/.test(origin);

  return isLocalNetworkOrigin || isVercelFrontend;
};

app.use(cookieParser());
app.use(express.json({limit:"20mb"}));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Building react apps in Static files, so when the user tries to refresh a deep link- the react SPAs routes it first and then add a catch-all route and routes back to index.html

// if(process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   // is written after every API routes.
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

const startServer = async () => {
  try{
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error){
    console.error(`Server is running on port ${PORT}`);
    process.exit(1);
  } 
}

startServer();