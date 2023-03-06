import { DataSource } from "typeorm";
import "reflect-metadata";
import { userEntity } from "../models/userEntity.mjs";

export const datasource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: true,
  entities: [userEntity],
});
