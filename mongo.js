let mongoClient = require('mongodb').MongoClient
const {
    url
} = require('./password');

let books;
mongoClient.connect(url, function (err, client) {
    let database = client.db("libraryFromNode")
    
    books = database.collection('books')
})

function getBooks() {
    return books
}

module.exports = {
    getBooks
}