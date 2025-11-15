import express, { Application } from "express";
import { userRoutes } from "../routes/user.routes";
import { API_VERSIONS, ROUTES } from "../shared/constants";
import { AppDataSource } from "./database.config";

export class AppConfig {
  constructor(private readonly app: Application) {}

  async configure(): Promise<void> {
    await AppDataSource.initialize();

    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares(): void {
    this.app.use(express.json());
  }

  private setupRoutes(): void {
    this.app.use(`/${API_VERSIONS.V1}${ROUTES.USERS}`, userRoutes);
  }
}
