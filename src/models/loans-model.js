const uuid = require('uuid').v4

const loans = [
    {
        id: '1',
        userId: '1',
        bookId:  '1',
        loanDate: new Date('2026-01-01'),
        returnDate: null,
        isReturned: false,
        isLate: true
    }
]

module.exports = {
    getAllLoans: () => loans,

    getLoanById: (id) => loans.find(loan => loan.id === id),

    
}