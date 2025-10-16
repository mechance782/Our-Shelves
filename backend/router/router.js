import { Router } from "express";
import { fetchBooks } from "../controllers/bookController.js";
import {
  listBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/booksDbController.js";

// create a new express router
const router = Router();

// book routes

// search books by title using the Open Library API
router.get("/books/search/:bookName", fetchBooks);

// get all books from the local database
router.get("/books", listBooks);

// get, create, update, delete book by id in the local database
router.get("/books/id/:id", getBookById);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;