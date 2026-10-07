"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const next_1 = __importDefault(require("next"));
const database_1 = require("./backend/config/database");
const enquiry_routes_1 = __importDefault(require("./backend/routes/enquiry.routes"));
dotenv_1.default.config();
const dev = process.env.NODE_ENV !== "production";
const HOST = "0.0.0.0";
const PORT = Number(process.env.PORT) || 3000;
const nextApp = (0, next_1.default)({
    dev,
    hostname: HOST,
    port: PORT,
});
const handle = nextApp.getRequestHandler();
async function startServer() {
    try {
        await (0, database_1.connectDB)();
        await nextApp.prepare();
        const app = (0, express_1.default)();
        // Security
        app.use((0, helmet_1.default)());
        // Body parser
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        // API health
        app.get("/api/health", (_req, res) => {
            res.status(200).json({
                success: true,
                message: "Strap World backend API is running",
            });
        });
        // API routes
        app.use("/api/enquiries", enquiry_routes_1.default);
        // Next.js
        app.use((req, res) => {
            return handle(req, res);
        });
        app.listen(PORT, HOST, () => {
            console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 SoftQivo Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Server:
http://localhost:${PORT}

API:
http://localhost:${PORT}/api

Health:
http://localhost:${PORT}/api/health

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
        });
    }
    catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
}
startServer();
