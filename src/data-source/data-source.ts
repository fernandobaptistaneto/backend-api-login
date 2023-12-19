import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const entity = process.env.DB_ENTITIES as string | Function;

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    entities: ['src/entity/*.ts', 'src/entity/*/*.ts']
})