import mysql from "mysql2/promise";
import { logger } from "../logger";

const connection = await mysql.createConnection({
  host: "project-gallery-project-gallery.a.aivencloud.com",
  user: "avnadmin",
  database: "just-auth",
  password: process.env.AIVEN_PASSWORD,
  port: 15464,
  ssl: {
    rejectUnauthorized: false,
  },
});

logger.info("Database connection established");

export { connection };
