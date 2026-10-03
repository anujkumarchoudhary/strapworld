// import { createServer } from "http";
// import next from "next";
// import expressApp from "./backend/app";

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const port = 3000;

// async function startServer() {
//   const nextApp = next({
//     dev,
//     hostname,
//     port,
//   });

//   const handle = nextApp.getRequestHandler();

//   await nextApp.prepare();

//   const server = createServer((req, res) => {
//     if (req.url?.startsWith("/api")) {
//       expressApp(req, res);
//     } else {
//       handle(req, res);
//     }
//   });

//   server.listen(port, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
//   });
// }

// startServer();

import { createServer } from "http";
import next from "next";
import expressApp from "./backend/app";

const dev = process.env.NODE_ENV !== "production";

const hostname = dev ? "localhost" : "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

async function startServer() {
  const nextApp = next({
    dev,
    hostname,
    port,
  });

  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const server = createServer((req, res) => {
    // API health check
    if (req.url === "/api/health") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          success: true,
          message: "API is running",
          environment: process.env.NODE_ENV || "development",
        })
      );

      return;
    }

    // Express API
    if (req.url?.startsWith("/api")) {
      expressApp(req, res);
      return;
    }

    // Next.js
    handle(req, res);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
}

startServer();