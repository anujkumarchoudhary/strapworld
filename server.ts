import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { connectDB } from "./backend/config/database";
import enquiryRoutes from "./backend/routes/enquiry.routes";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

// Security
app.use(helmet());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "SoftQivo backend API is running",
  });
});

app.use("/api/enquiries", enquiryRoutes);

// Start server
async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, HOST, () => {
      console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 SoftQivo Express Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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