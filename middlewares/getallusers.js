const { getUsers } = require('../mongo')

function getAllUsers(request, response){
    let users = getUsers;

    users.find().toArray(function(err, documents){
        response.send(JSON.stringify(documents))
    });
}

module.exports = {
    getAllUsers
}
