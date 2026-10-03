import { createServer } from "http";
import next from "next";
import expressApp from "./backend/app";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

async function startServer() {
  const nextApp = next({
    dev,
    hostname,
    port,
  });

  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const server = createServer((req, res) => {
    if (req.url?.startsWith("/api")) {
      expressApp(req, res);
    } else {
      handle(req, res);
    }
  });

  server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
}

startServer();