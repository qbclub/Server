const express = require('express')

const app = express()
const port = 3000;

// Запрос с адреса: http://localhost:3000/
app.get('/', function(request, response) {
    response.send('Hello world!')
})







app.listen(port, function() {
    console.log(`App listening on port ${port}`)
})