const booksModel = require("../models/books-model")

module.exports = {
    // GET /api/books
    index: (req, res) => {
        const books = booksModel.getAllBooks()
        res.json(books)
    },
}