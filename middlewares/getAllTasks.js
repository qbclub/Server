const { getTasks } = require('../mongo')

function getAllTasks(request, response) {
    const tasks = getTasks()

    tasks.find({}).toArray(function (err, documents) {
        response.send(documents)
    })
}

module.exports = {
    getAllTasks,
}