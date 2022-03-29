const { getBooks } = require('../mongo')

function updateBook(request, response) {
    const books = getBooks()

    books.updateOne(
        { "Id": { $eq: 1644080220123 } },
        { $set: {"Name": "Выразительный JavaScript. Современное веб-программирование."}},
        { upsert: false }
    )
}

module.exports = {
    updateBook
}