import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let connection;

try {
    // create a new MySQL connection using environment variables
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  // if successful, log a success message
  console.log("Database connected successfully");
} catch (error) {
    // if there's an error, log it and exit the process
  console.error("Failed to connect to the database:", error.message);
  process.exit(1);
}

export default connection;
