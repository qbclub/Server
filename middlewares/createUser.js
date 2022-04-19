const { getUsers } = require('../mongo')
let user = {name: "dfsgdsg"};

function createUser(request, response){
    let users = getUsers()

    users.insertOne(user)
}
module.exports = {
    createUser
}