import dotenv from "dotenv";
import { createServer } from "http";
import express from "express";
import helmet from "helmet";
import next from "next";

import enquiryRoutes from "./routes/enquiry.routes";
import productRoutes from './routes/product.routes';
import serviceRoutes from "./routes/service.routes";
import { connectDB } from "./config/database";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({
  path: envFile,
});

const dev = process.env.NODE_ENV !== "production";

const hostname = "localhost";
const port = Number(process.env.PORT) || 8000;

const nextApp = next({
  dev,
  hostname,
  port,
});

const handle = nextApp.getRequestHandler();

async function startServer() {
  try {
    await connectDB()
    await nextApp.prepare();

    const app = express();

    // ============================
    // SECURITY
    // ============================

    app.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );

    // ============================
    // BODY PARSERS
    // ============================

    app.use(express.json());

    app.use(
      express.urlencoded({
        extended: true,
      }),
    );

    // ============================
    // API
    // ============================

    app.get("/api/health", (_req, res) => {
      res.status(200).json({
        success: true,
        message: "Strap World backend API is running",
      });
    });

    app.use("/api/enquiries", enquiryRoutes);
app.use("/api/products", productRoutes);

    app.use("/api/services", serviceRoutes);

    // ============================
    // NEXT.JS FRONTEND
    // ============================

    app.all(/.*/, (req, res) => {
      return handle(req, res);
    });

    // ============================
    // START SERVER
    // ============================

    createServer(app).listen(port, () => {
      console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Strap World Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
http://localhost:${port}

Backend:
http://localhost:${port}/api

Health:
http://localhost:${port}/api/health

Services:
http://localhost:${port}/api/services

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);

    process.exit(1);
  }
}

startServer();
