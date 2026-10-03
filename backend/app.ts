import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/...", ...);

export default app;