"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const database_1 = require("./backend/config/database");
const user_routes_1 = __importDefault(require("./backend/routes/user.routes"));
const product_routes_1 = __importDefault(require("./backend/routes/product.routes"));
const blog_routes_1 = __importDefault(require("./backend/routes/blog.routes"));
const category_routes_1 = __importDefault(require("./backend/routes/category.routes"));
const enquiry_routes_1 = __importDefault(require("./backend/routes/enquiry.routes"));
const chat_routes_1 = __importDefault(require("./backend/routes/chat.routes"));
const chat_socket_1 = require("./backend/socket/chat.socket");
const chat_io_1 = require("./backend/socket/chat.io");
const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = Number(process.env.PORT) || 4000;
const nextApp = (0, next_1.default)({
    dev,
    hostname,
    port,
});
const handle = nextApp.getRequestHandler();
const Base = "/api/v1/";
const startServer = async () => {
    try {
        // Connect to MongoDB
        await (0, database_1.connectDB)();
        // Prepare Next.js
        await nextApp.prepare();
        const app = (0, express_1.default)();
        // Middleware
        const allowedOrigins = [
            "http://localhost:3000",
            "http://localhost:4000",
            "http://localhost:8000",
            "https://strapworld.in"
        ];
        app.use((0, cors_1.default)({
            origin: allowedOrigins,
            credentials: true,
        }));
        app.use(express_1.default.json({ limit: "10mb" }));
        app.use(express_1.default.urlencoded({
            extended: true,
            limit: "10mb",
        }));
        // API Routes
        app.use(`${Base}auth`, user_routes_1.default);
        app.use(`${Base}products`, product_routes_1.default);
        app.use(`${Base}blogs`, blog_routes_1.default);
        app.use(`${Base}categories`, category_routes_1.default);
        app.use(`${Base}enquiries`, enquiry_routes_1.default);
        app.use(`${Base}chat`, chat_routes_1.default);
        // Health Check
        app.get(`${Base}health`, (_req, res) => {
            res.status(200).json({
                success: true,
                message: "Server is running",
                environment: process.env.NODE_ENV,
            });
        });
        // Create HTTP server
        const server = http_1.default.createServer(app);
        // Initialize Socket.IO
        const io = new socket_io_1.Server(server, {
            cors: {
                origin: allowedOrigins,
                credentials: true,
                methods: ["GET", "POST", "PATCH"],
            },
        });
        // Register live chat socket events
        (0, chat_io_1.setChatIO)(io);
        (0, chat_socket_1.registerChatSocket)(io);
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
    }
    catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};
startServer();
