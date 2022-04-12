const { getBooks } = require('../mongo')
let book = {name: "dfsgdsg"};

function createbook(request, response){
    let books = getBooks()

    books.insertOne(book)
}
module.exports = {
    createbook
}