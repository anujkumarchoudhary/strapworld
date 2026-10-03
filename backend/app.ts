import express from "express";
import cors from "cors";
import helmet from "helmet";

import enquiryRoutes from "./routes/enquiry.routes";

console.log("🔥 VERCEL EXPRESS FUNCTION LOADED");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Express API is working",
  });
});

app.use("/api/enquiry", enquiryRoutes);

export default app;