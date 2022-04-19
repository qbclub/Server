const { getBooks } = require('../mongo')

function deleteBookById(request, response) {
    const books = getBooks()

    books.deleteOne(
        { "Id": { $eq: 1649777143478 } },
        
    )
}

module.exports = {
    deleteBookById
    
}