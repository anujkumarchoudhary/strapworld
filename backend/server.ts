import "dotenv/config";

import { createServer } from "http";
import express from "express";
import helmet from "helmet";
import next from "next";

import enquiryRoutes from "./routes/enquiry.routes";
import productRoutes from "./routes/product.routes";
import serviceRoutes from "./routes/service.routes";
import { connectDB } from "./config/database";

const dev = process.env.NODE_ENV !== "production";

const hostname = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 8000;

// ========================================
// NEXT.JS
// ========================================

const nextApp = next({
  dev,
  hostname,
  port,
});

const handle = nextApp.getRequestHandler();

// ========================================
// START SERVER
// ========================================

async function startServer() {
  try {
    // ------------------------------------
    // DATABASE
    // ------------------------------------

    await connectDB();

    // ------------------------------------
    // PREPARE NEXT.JS
    // ------------------------------------

    await nextApp.prepare();

    // ------------------------------------
    // EXPRESS
    // ------------------------------------

    const app = express();

    // ====================================
    // SECURITY
    // ====================================

    app.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );

    // ====================================
    // BODY PARSERS
    // ====================================

    app.use(express.json());

    app.use(
      express.urlencoded({
        extended: true,
      }),
    );

    // ====================================
    // API HEALTH
    // ====================================

    app.get("/api/health", (_req, res) => {
      res.status(200).json({
        success: true,
        message: "Strap World backend API is running",
        environment: process.env.NODE_ENV || "development",
      });
    });

    // ====================================
    // API ROUTES
    // ====================================

    app.use("/api/enquiries", enquiryRoutes);

    app.use("/api/products", productRoutes);

    app.use("/api/services", serviceRoutes);

    // ====================================
    // API 404
    // ====================================

    app.use("/api", (_req, res) => {
      res.status(404).json({
        success: false,
        message: "API endpoint not found",
      });
    });

    // ====================================
    // NEXT.JS FRONTEND
    // ====================================

    app.all(/.*/, (req, res) => {
      return handle(req, res);
    });

    // ====================================
    // START HTTP SERVER
    // ====================================

    createServer(app).listen(port, hostname, () => {
      console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Strap World Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Environment:
${process.env.NODE_ENV || "development"}

Host:
${hostname}

Port:
${port}

Frontend:
http://localhost:${port}

Backend:
http://localhost:${port}/api

Health:
http://localhost:${port}/api/health

Services:
http://localhost:${port}/api/services

Products:
http://localhost:${port}/api/products

Enquiries:
http://localhost:${port}/api/enquiries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);

    process.exit(1);
  }
}

// ========================================
// RUN
// ========================================

startServer();
