const {getBooks} = require('../mongo')

function getBookById(request, response) {
    let books = getBooks()

    books.find({ "Id": { $eq: 1644080220123 } }).toArray(function(err, documents){
        response.send(JSON.stringify(documents))
    });
}

module.exports = {
    getBookById
}