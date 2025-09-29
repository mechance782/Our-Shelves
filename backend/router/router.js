import { Router } from "express";
import { fetchBooks } from "../controllers/bookController.js";

const router = Router();

router.get("/books/:bookName", fetchBooks);

export default router;
