import express from 'express';
import dotenv from 'dotenv';
import db from "./db.js";
import router from "./router/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => res.send('Hello World'));

// app.get("/db-test", async (_, res) => {
//     try {
//       const [rows] = await db.query("SELECT NOW() AS now");
//       res.json({ message: "Database connected!", time: rows[0].now });
//     } catch (error) {
//       console.error("Database error:", error);
//       res.status(500).json({ error: "Database connection failed" });
//     }
//   });  

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
