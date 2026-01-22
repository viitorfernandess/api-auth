const uuid = require('uuid').v4

const books = [ 
    { id: '1', title: 'Book One', author: 'Author One', quantityAvailable: 4 },
    { id: '2', title: 'Book Two', author: 'Author Two', quantityAvailable: 3 }
]


module.exports = {
    getAllBooks: () => books,

    getBookById: (id) => books.find(book => book.id === id),

    
}