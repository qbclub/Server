const { getUsers } = require('../mongo')
let user = {name: "dfsgdsg"};

function createuser(request, response){
    let users = getUsers()

    user.insertOne(user)
}
module.exports = {
    createuser
}