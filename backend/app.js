import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import router from "./router/router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: true }));
app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.get("/healthz", (_req, res) => res.json({ ok: true }));
app.use("/api", router);

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
