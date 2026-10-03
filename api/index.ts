import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";

import enquiryRoutes from "../backend/routes/enquiry.routes";
import serviceRoutes from "../backend/routes/service.routes";

dotenv.config();

const app = express();

// Security
app.use(helmet());

// Body parser
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Health
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Strap World backend API is running",
  });
});

// API routes
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/services", serviceRoutes);

export default app;