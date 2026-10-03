import express from "express";
import helmet from "helmet";

import enquiryRoutes from "../backend/routes/enquiry.routes";
import serviceRoutes from "../backend/routes/service.routes";

const app = express();

app.use(helmet());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Strap World backend API is running",
  });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/services", serviceRoutes);

export default app;