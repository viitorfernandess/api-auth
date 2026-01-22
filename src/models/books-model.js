const uuid = require('uuid').v4

const books = [
    { id: '1', title: 'Book One', author: 'Author One', quantityAvailable: 4 },
    { id: '2', title: 'Book Two', author: 'Author Two', quantityAvailable: 3 }
]


module.exports = {
    getAllBooks: () => books,

    getBookById: (id) => books.find(book => book.id === id),

    createBook: (title, author, quantityAvailable) => {
        const newBook = {
            id: uuid(),
            title,
            author,
            quantityAvailable
        }
        books.push(newBook)
        return newBook
    },

    uptadeBook: (id, updatedBook) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if (bookIndex === -1) throw new Error('Livro não encontrado')
        books[bookIndex] = { ...books[bookIndex], ...updatedBook }
        return books[bookIndex]
    },
}