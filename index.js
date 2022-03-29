const express = require('express')

const app = express()
const port = 3000;
var cors = require('cors')


app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


const booksFunctions = require('./middlewares/booksFunctions')


app.get('/', booksFunctions.getAll)


app.listen(port, function() {
    console.log(`App listening on port ${port}`)
})