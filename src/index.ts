import "reflect-metadata";
import { AppConfig, Environment } from "./config";

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const appConfig = new AppConfig(app);

appConfig.configure();

app.listen(Environment.PORT, () => {
  console.log(`🚀 Server running at http://${Environment.HOST}:${Environment.PORT}`);
});
