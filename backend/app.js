import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';
import router from './router/router.js';
import cors from 'cors';
import morgan from 'morgan';

// load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors({ origin: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => res.send('Welcome to Our Shelves API!'));
app.use('/', router);

// testing database connection
app.get('/db-test', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM books');
      res.json({
        message: 'Database connected successfully!',
        books: rows,
      });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({
        error: 'Database connection failed',
        details: error.message,
      });
    }
  }); 

// start the server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
