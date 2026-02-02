const loansModel = require("../models/loans-model")

module.exports = {
    // GET /api/loans
    index: (req, res) => {
        const loans = loansModel.getAllLoans()
        res.json(loans)
    },

    // GET /api/loans/:id

}