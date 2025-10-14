import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';
import router from './router/router.js';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Welcome to Our Shelves API!'));
app.use('/', router);

// test route
app.get('/db-test', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM books');
    res.json({ message: 'Database connected', books: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
