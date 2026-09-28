const dev = process.env.NODE_ENV !== "production";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({
  path: envFile,
});


import { createServer } from "http";
import express from "express";
import helmet from "helmet";
import next from "next";
import { connectDB } from "./config/database";
import dotenv from "dotenv";
import enquiryRoutes from "./routes/enquiry.routes";

const hostname = "localhost";
const port = Number(process.env.PORT) || 3000;

const nextApp = next({
  dev,
  hostname,
  port,
});

const handle = nextApp.getRequestHandler();

async function startServer() {
  try {
    // await connectDB();
    await nextApp.prepare();

    const app = express();

    /*
     * ============================
     * SECURITY
     * ============================
     */

    app.use(helmet());

    /*
     * ============================
     * BODY PARSERS
     * ============================
     */

    app.use(express.json());

    app.use(
      express.urlencoded({
        extended: true,
      }),
    );

    /*
     * ============================
     * BACKEND API
     * ============================
     */

    app.get("/api/health", (_req, res) => {
      res.status(200).json({
        success: true,
        message: "SoftQivo backend API is running",
      });
    });
    app.use("/api/enquiries", enquiryRoutes);
    /*
     * ============================
     * NEXT.JS FRONTEND
     * ============================
     */
    app.use((req, res) => {
      return handle(req, res);
    });

    /*
     * ============================
     * START SERVER
     * ============================
     */

    createServer(app).listen(port, () => {
      console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 SoftQivo Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
http://localhost:${port}

Backend:
http://localhost:${port}/api

Health:
http://localhost:${port}/api/health

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
