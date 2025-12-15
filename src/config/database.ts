import { DataSource } from "typeorm";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { CreateProductTable1734268800000 } from "../migrations/1734268800000-CreateProductTable";
import { CreateUserTable1734268850000 } from "../migrations/1734268850000-CreateUserTable";
// import * as migrations from "../migrations";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "crud_db",
  synchronize: false,
  logging: process.env.NODE_ENV === "development",
  entities: [Product, User],
  migrations: [CreateUserTable1734268850000, CreateProductTable1734268800000],
  migrationsRun: true,
  migrationsTableName: "migrations_history",
  subscribers: [],
});
