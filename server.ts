// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Health check
// app.get("/api", (_req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Backend API is running",
//   });
// });

// // Example API
// app.get("/api/test", (_req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Test API working",
//   });
// });

// const PORT = process.env.PORT || 7000;

// // Local only
// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => {
//     console.log(`Backend running on http://localhost:${PORT}`);
//   });
// }

// export default app;



import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (_req, res) => {
  res.json({
    success: true,
    message: "Backend API is running",
  });
});

// Your routes
// app.use("/api/blogs", blogRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

export default app;