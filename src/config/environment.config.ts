import dotenv from "dotenv";
import { NodeEnv } from "../shared/enums";

dotenv.config();

export class Environment {
  // ========================
  // Application
  // ========================
  static get PORT(): number {
    return process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  }

  static get NODE_ENV(): NodeEnv {
    switch (process.env.NODE_ENV?.toLowerCase()) {
      case NodeEnv.PROD:
        return NodeEnv.PROD;
      case NodeEnv.DEV:
        return NodeEnv.DEV;
      default:
        return NodeEnv.DEV;
    }
  }

  static get HOST(): string {
    return process.env.HOST || "localhost";
  }

  // ========================
  // Database
  // ========================
  static get DB_NAME(): string {
    return process.env.DB_NAME || "micro_step_db";
  }

  static get DB_USER(): string {
    return process.env.DB_USER || "root";
  }

  static get DB_PASSWORD(): string {
    return process.env.DB_PASSWORD || "root";
  }

  static get DB_PORT(): number {
    return process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
  }

  static get DB_HOST(): string {
    return process.env.DB_HOST || "localhost";
  }
}
