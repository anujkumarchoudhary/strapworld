import "dotenv/config";

import express from "express";
import next from "next";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import { connectDB } from "./backend/config/database";

import authRoutes from "./backend/routes/user.routes";
import productRoutes from "./backend/routes/product.routes";
import blogRoutes from "./backend/routes/blog.routes";
import categoriesRoutes from "./backend/routes/category.routes";
import enquirieRoutes from "./backend/routes/enquiry.routes";
import chatRoutes from "./backend/routes/chat.routes";

import { registerChatSocket } from "./backend/socket/chat.socket";

const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = Number(process.env.PORT) || 4000;

const nextApp = next({
  dev,
  hostname,
  port,
});

const handle = nextApp.getRequestHandler();

const Base = "/api/v1/";

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Prepare Next.js
    await nextApp.prepare();

    const app = express();

    // Middleware
    const allowedOrigins = [
      "http://localhost:3000",
      "http://localhost:4000",
      "http://localhost:8000",
    ];

    app.use(
      cors({
        origin: allowedOrigins,
        credentials: true,
      }),
    );

    app.use(express.json({ limit: "10mb" }));

    app.use(
      express.urlencoded({
        extended: true,
        limit: "10mb",
      }),
    );

    // API Routes
    app.use(`${Base}auth`, authRoutes);
    app.use(`${Base}products`, productRoutes);
    app.use(`${Base}blogs`, blogRoutes);
    app.use(`${Base}categories`, categoriesRoutes);
    app.use(`${Base}enquiries`, enquirieRoutes);
    app.use(`${Base}chat`, chatRoutes);

    // Health Check
    app.get(`${Base}health`, (_req, res) => {
      res.status(200).json({
        success: true,
        message: "Server is running",
        environment: process.env.NODE_ENV,
      });
    });

    // Create HTTP server
    const server = http.createServer(app);

    // Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PATCH"],
  },
});

    // Register live chat socket events
    registerChatSocket(io);

    // Next.js request handler
    app.use((req, res) => {
      return handle(req, res);
    });

    // Start Server
    server.listen(port, hostname, () => {
      console.log(`
========================================
Server started successfully
========================================

Environment : ${process.env.NODE_ENV}
Port        : ${port}
URL         : http://localhost:${port}
Chat API    : http://localhost:${port}/api/v1/chat
Socket.IO   : enabled

========================================
      `);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
