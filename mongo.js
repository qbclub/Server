let mongoClient = require('mongodb').MongoClient
const {
    url
} = require('./password');

let books;
let users;
mongoClient.connect(url, function (err, client) {
    let database = client.db("libraryFromNode")
    
    books = database.collection('books')
    users = database.collection('users')
})

function getBooks() {

    return books
}
function getUsers() {
    return users
}


module.exports = {
    getBooks,
    getUsers
}