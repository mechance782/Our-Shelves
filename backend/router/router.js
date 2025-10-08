import { Router } from "express";
import { fetchBooks } from "../controllers/bookController.js";
import { listBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/booksDbController.js";

const router = Router();

// fetch books from open library API by book name
router.get("/books/:bookName", fetchBooks);

// CRUD routes for database
router.get("/books", listBooks);
router.get("/books/id/:id", getBookById);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
