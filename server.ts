import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import connectDB from "./config/db";

dotenv.config();

const app = express();

/* -------------------- Middleware -------------------- */

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- Database -------------------- */

// connectDB();

/* -------------------- Routes -------------------- */

app.get("/api", (_req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});


/* -------------------- Error Handler -------------------- */

app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
);

/* -------------------- Local Development -------------------- */

const PORT = process.env.PORT || 7000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

/* -------------------- Vercel -------------------- */

export default app;