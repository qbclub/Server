const { getTasks } = require('../mongo');

function createTask(request, response) {
    // getTasks().insertOne(request.body, { upsert: false })
    console.log('createTask')
}

module.exports = {
    createTask
}