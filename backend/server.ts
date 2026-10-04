import "dotenv/config";
console.log("🔥 CUSTOM BACKEND SERVER.TS IS RUNNING");

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
  // Do NOT pass port here.
  // Express owns the HTTP server.
});

const handle = nextApp.getRequestHandler();

// ========================================
// EXPRESS
// ========================================

const app = express();

// ========================================
// START
// ========================================

async function startServer() {
  try {
    console.log("🚀 Starting Strap World server...");

    // ------------------------------------
    // DATABASE
    // ------------------------------------

    await connectDB();

    console.log("✅ MongoDB connected");

    // ------------------------------------
    // NEXT.JS
    // ------------------------------------

    await nextApp.prepare();

    console.log("✅ Next.js prepared");

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
    // HEALTH CHECK
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
    // HTTP SERVER
    // ====================================

    const server = app.listen(port, hostname, () => {
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

    // ====================================
    // ERROR HANDLING
    // ====================================

    server.on("error", (error) => {
      console.error("❌ HTTP server error:", error);
    });

    // ====================================
    // GRACEFUL SHUTDOWN
    // ====================================

    const shutdown = async (signal: string) => {
      console.log(`\n⚠️ ${signal} received. Shutting down...`);

      server.close(async (error) => {
        if (error) {
          console.error("❌ Error while closing server:", error);
          process.exit(1);
        }

        console.log("✅ HTTP server closed");

        try {
          await nextApp.close();

          console.log("✅ Next.js closed");
          console.log("👋 Strap World server stopped");

          process.exit(0);
        } catch (error) {
          console.error("❌ Error closing Next.js:", error);
          process.exit(1);
        }
      });
    };

    process.once("SIGTERM", () => shutdown("SIGTERM"));
    process.once("SIGINT", () => shutdown("SIGINT"));
  } catch (error) {
    console.error("❌ Failed to start server:", error);

    process.exit(1);
  }
}

// ========================================
// RUN
// ========================================

startServer();