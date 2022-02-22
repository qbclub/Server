const express = require('express')

const app = express()
const port = 3000;
var cors = require('cors')

let mongoClient = require('mongodb').MongoClient

const {
    url
} = require('./password');
const {
    response
} = require('express');

let books, bookflow, users
mongoClient.connect(url, function (err, client) {
    let database = client.db("libraryFromNode")

    books = database.collection("books")
    bookflow = database.collection("bookflow")
    users = database.collection("users")

    console.log('mongo connected')
})


app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


// Запрос с адреса: http://localhost:3000/
app.get('/', function(request, response) {
    let r  = books.find({}).toArray(function(err, documents){
        response.send(JSON.stringify(documents))
    });
    
    console.log(r)
})







app.listen(port, function() {
    console.log(`App listening on port ${port}`)
})