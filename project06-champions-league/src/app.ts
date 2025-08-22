import express from "express";
import { router } from "./routes/routes";
import cors from "cors";

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use("/api", router);
  app.use(cors());

  return app;
};
