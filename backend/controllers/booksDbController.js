import db from '../db.js';

// get list of all books
export const listBooks = async (req, res) => {
    try {
      const [rows] = await db.query(`
        SELECT
          id,
          title,
          author,
          genre,
          description,
          published_year AS publishedYear,
          cover_image AS coverImage,
          created_at AS createdAt
        FROM books
        ORDER BY id DESC
      `);
      res.json(rows);
    } catch (err) {
      console.error('listBooks error:', err);
      res.status(500).json({ error: 'Failed to fetch books'});
    }
};

// get book by id
export const getBookById = async (req, res) => {
    try {
      const [rows] = await db.query(`
        SELECT
          id,
          title,
          author,
          genre,
          description,
          published_year AS publishedYear,
          cover_image AS coverImage,
          created_at AS createdAt
        FROM books
        WHERE id = ?
      `, [req.params.id]);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json(rows[0]);
    } catch (err) {
      console.error('getBookById error:', err);
      res.status(500).json({ error: 'Failed to fetch book' });
    }
};

// add a new book
export const createBook = async (req, res) => {
    const { title, author, genre, description, publishedYear, coverImage } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'title is required' });
    }

    try {
        const [result] = await db.execute(`
            INSERT INTO books (title, author, genre, description, published_year, cover_image)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [title, author || null, genre || null, description || null, publishedYear || null, coverImage || null]);

        res.status(201).json({
            id: result.insertId,
            title,
            author,
            genre,
            description,
            publishedYear,
            coverImage 
        });
    } catch (err) {
        console.error('createBook error:', err);
        res.status(500).json({ error: 'Failed to create book' });
    }
}