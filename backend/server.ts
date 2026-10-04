import "dotenv/config";

import express from "express";

const app = express();

const hostname = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 8000;

app.get("/", (_req, res) => {
  res.send("Strap World server is running");
});

app.listen(port, hostname, () => {
  console.log("🚀 Strap World server is running");
  console.log(`📡 Port: ${port}`);
});