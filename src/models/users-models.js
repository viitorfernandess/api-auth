const users = [
    { id: '1', name: 'Vitor', email: 'vitor@email.com', password: '1234' },
    { id: '2', name: 'Marcos', email: 'marcos@email.com', password: '0000' }
]

module.exports = {
    getAllUsers: () => users,

    getUserById: (id) => users.find(user => user.id === id),

    getUserByEmail: (email) => users.find(user => user.email === email)
}