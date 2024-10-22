const express = require("express")
const { getBooks, getBook, addBook, updateBook, deleteBook } = require("../controllers/books.controller")
const router = express.Router()

router.get("/api/books", async(req, res) => await getBooks(req, res))
router.post("/api/books", async(req, res) => await addBook(req, res))
router.get("/api/books/:bookId", async(req, res) => await getBook(req, res))
router.put("/api/books/:bookId", async(req, res) => await updateBook(req, res))
router.delete("/api/books/:bookId", async(req, res) => await deleteBook(req, res))

module.exports = router