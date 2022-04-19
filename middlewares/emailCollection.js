const { getUsers } = require('../mongo')

function getUsersByEmail(request, response) {
    let users = getUsers()

    users.find({ "Contacts.Email": { $eq: "grishadzyin@gmail.com" } }).toArray(function(err, documents){
        response.send(JSON.stringify(documents))
    });
}

module.exports = {
    getUsersByEmail
}