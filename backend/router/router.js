import { Router } from "express";
import { fetchBooks } from "../controllers/bookController.js";
import { listBooks, getBookById, createBook } from "../controllers/booksDbController.js";

const router = Router();

// fetch books from open library API by book name
router.get("/search/:bookName", fetchBooks);

// get all books
router.get("/books", listBooks);

// get single book by id
router.get("/books/:id", getBookById);

// post new book
router.post("/books", createBook);

export default router;
