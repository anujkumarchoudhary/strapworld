
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import next from "next";

import { connectDB } from "./backend/config/database";
import enquiryRoutes from "./backend/routes/enquiry.routes";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const HOST = "0.0.0.0";
const PORT = Number(process.env.PORT) || 3000;

const nextApp = next({
  dev,
  hostname: HOST,
  port: PORT,
});

const handle = nextApp.getRequestHandler();

async function startServer() {
  try {
    await connectDB();

    await nextApp.prepare();

    const app = express();

    // Security
    app.use(helmet());

    // Body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // API health
    app.get("/api/health", (_req, res) => {
      res.status(200).json({
        success: true,
        message: "Strap World backend API is running",
      });
    });

    // API routes
    app.use("/api/enquiries", enquiryRoutes);

    // Next.js
    app.all("*", (req, res) => {
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
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
