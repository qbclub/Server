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
const { updateBook } = require('./middlewares/updateBook');
const { getBookById } = require('./middlewares/getbooksbyId');
const { createbook } = require('./middlewares/createbooks');
const { deleteBookById } = require('./middlewares/deletebooksbyId')
const { getUsersByEmail } = require('./middlewares/emailCollection')
const { getAllUsers } = require('./middlewares/getallusers')


app.get('/', booksFunctions.getAll)
app.get('/update', updateBook)
app.get('/getbooksbyId', getBookById)
app.get('/create', createbook)
app.get('/deletebookbyid', deleteBookById)
app.get('/getuserbyemail', getUsersByEmail)
app.get('/getallusers', getAllUsers)


app.listen(port, function () {
    console.log(`App listening on port ${port}`)
})

