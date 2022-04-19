const { getUsers } = require('../mongo')

function deleteUserByEmail(request, response){
    let users = getUsers()

    users.deleteOne(
        {"Contacts.Email": { $eq: "test@test.com"} },
    )
}

module.exports = {
    deleteUserByEmail
}