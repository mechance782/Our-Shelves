import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import router from "./router/router.js";
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(cors({ origin: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
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

app.listen(PORT, HOST, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
