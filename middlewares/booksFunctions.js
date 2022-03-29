const { getBooks } = require('../mongo')


function getAll(request, response) {
    const books = getBooks()

    let r  = books.find({}).toArray(function(err, documents){
        response.send(JSON.stringify(documents))
    });
    
    console.log(r)
    // console.log(books)
}

module.exports = {
    getAll
}