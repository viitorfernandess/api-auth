const express = require('express')
const booksController = require('../controllers/books-controller')
const apiRouter = express.Router()

apiRouter.get('/books', booksController.index)

module.exports = apiRouter