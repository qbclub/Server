let mongoClient = require('mongodb').MongoClient
const {
    url
} = require('./password');

let books;
let users;
let tasks;
mongoClient.connect(url, function (err, client) {
    let database = client.db("libraryFromNode")

    books = database.collection('books')
    users = database.collection('users')
    tasks = database.collection('tasks')
    console.log('mongo connected')
})

function getBooks() {
    return books
}
function getUsers() {
    return users
}

function getTasks() {
    return tasks
}

module.exports = {
    getBooks,
    getUsers,
    getTasks
}