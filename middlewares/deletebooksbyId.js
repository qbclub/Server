const { getBooks } = require('../mongo')

function deletebooks(request, response) {
    const books = getBooks()

    books.deleteOne(
        { "Id": { $eq: 1649777143478 } },
        
    )
}

module.exports = {
    deletebooks
    
}