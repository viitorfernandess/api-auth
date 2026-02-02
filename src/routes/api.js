const express = require('express')
const booksController = require('../controllers/books-controller')
const loansController = require('../controllers/loans-controller')
const apiRouter = express.Router()

apiRouter.get('/books', booksController.index)
apiRouter.get('/books/:id', booksController.show)

apiRouter.post('/books', booksController.save)
apiRouter.put('/books/:id', booksController.update)
apiRouter.delete('/books/:id', booksController.delete)

apiRouter.get('/loans', loansController.index)
apiRouter.get('/loans', loansController.show)

module.exports = apiRouter