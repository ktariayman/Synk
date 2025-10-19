import express from "express";
import boardsRouter from "./routes/boards.routes";
import { ENV } from "./config/env";
const cors = require("cors")

export function buildServer() {
 const app = express();
 app.use(cors({ origin: ENV.CORS_ORIGIN, credentials: true }));

 app.use(express.json());

 app.get("/health", (_, res) => res.json({ status: "UP", time: new Date().toISOString() }));
 app.use("/api/boards", boardsRouter);

 return app;
}
