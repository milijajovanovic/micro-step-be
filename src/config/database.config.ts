import { DataSource } from "typeorm";
import { Environment } from "./";
import { NodeEnv } from "../shared/enums";

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
});
