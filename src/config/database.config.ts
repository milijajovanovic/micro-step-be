import { DataSource } from "typeorm";
import { Environment } from "./environment.config";
import { NodeEnv } from "../shared/enums";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: Environment.DB_HOST,
  port: Environment.DB_PORT,
  username: Environment.DB_USER,
  password: Environment.DB_PASSWORD,
  database: Environment.DB_NAME,
  synchronize: Environment.NODE_ENV === NodeEnv.DEV ? true : false,
  logging: true,
  entities: [],
  migrations: [path.join(__dirname, "../../migrations/*.{ts,js}")],
});
