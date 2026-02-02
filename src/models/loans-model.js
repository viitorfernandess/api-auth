const HttpError = require('../errors/HttpError')

const uuid = require('uuid').v4

const loans = [
    {
        id: '1',
        userId: '1',
        bookId: '1',
        loanDate: new Date('2026-01-01'),
        returnDate: null,
        isReturned: false,
        isLate: true
    }
]

module.exports = {
    getAllLoans: () => loans,

    getLoanById: (id) => loans.find(loan => loan.id === id),

    createLoan: (user, book) => {
        if (book.quantityAvailable < 1) throw new HttpError(400, 'Não há exemplares disponíveis!')

        const today = new Date()
        const returnDate = new Date()
        returnDate.setDate(today.getDate() + 14)

        const newLoan = {
            id: uuid(),
            userId: user.id,
            bookId: book.id,
            loanDate: today,
            returnDate: returnDate,
            isReturned: false,
            isLate: false
        }

        loans.push(newLoan)
        booksModel.updateBook(book.id, {quantityAvailable: book.quantityAvailable - 1})

        return newLoan
    },

    returnLoan: (id) => {
        
    }
}