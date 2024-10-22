const Books = require("../models/book.model")

const getBooks = async (req, res) => {
    try {
        const books = await Books.find({}).sort({createdAt: -1})
        res.status(200).json({
            message: "Success get books",
            data: books
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed get books"
        })
    }
}
const getBook = async (req, res) => {
    try {
        const bookId = req.params.bookId
        const book = await Books.findById(bookId)
        if(!book) {
            throw new Error("Book not found")
        }
        res.status(200).json({
            message: "Success get book",
            data: book
        })
    } catch (error) {
        error.message = error.kind === "ObjectId" ? "Book not found" : error.message
        res.status(400).json({
            message: error.message || "Failed get book"
        })
    }
}
const addBook = async (req, res) => {
    try {
        const { title, author, category, published_date, publisher, page_count } = req.body
        if(!title || !author || !category || !published_date || !publisher.name || !publisher.location || !page_count) {
            throw new Error("All field is required")
        }
        const newBook = {
            title, author, category, published_date, publisher, page_count
        }
        await Books.create(newBook)
        res.status(201).json({
            message: "New book has addded"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || "New book fail added"
        })
    }
}
const updateBook = async (req, res) => {
    try {
        const bookId = req.params.bookId
        const { title, author, category, published_date, publisher, page_count } = req.body
        if(!title || !author || !category || !published_date || !publisher.name || !publisher.location || !page_count) {
            throw new Error("All field is required")
        }
        const newUpdatedBook = {
            title, author, category, published_date, publisher, page_count
        }
        const book = await Books.updateOne({_id: bookId}, {$set: {...newUpdatedBook}})
        if(!book.modifiedCount) {
            throw new Error("Book not found")
        }
        res.status(200).json({
            message: "Book has updated"
        })
    } catch (error) {
        error.message = error.kind === "ObjectId" ? "Book not found" : error.message
        res.status(400).json({
            message: error.message || "Book fail updated"
        })
    }
}
const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.bookId
        const book = await Books.deleteOne({_id: bookId})
        if(!book.deletedCount) {
            throw new Error("Book not found")
        }
        res.status(200).json({
            message: "Book has deleted"
        })
    } catch (error) {
        error.message = error.kind === "ObjectId" ? "Book not found" : error.message
        res.status(400).json({
            message: error.message || "Book fail deleted"
        })
    }
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}