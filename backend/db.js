import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let connection;

async function initDB() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); 
  }
}

await initDB();

export default connection;
