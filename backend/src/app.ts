import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

import enquiryRoutes from "../routes/enquiry.routes";
import serviceRoutes from "../routes/service.routes";
import { connectDB } from "../config/database";

dotenv.config();

const app = express();

// Database Connection
connectDB();

// Security & Parsers
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Strap World backend API is running",
  });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/services", serviceRoutes);

export default app;