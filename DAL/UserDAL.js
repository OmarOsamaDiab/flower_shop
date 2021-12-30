const User = require('../models/User')

const registerNewUser = ({ email, username, password }) => {
    return User.query().insertAndFetch({
        email, username, password
    })
}

module.exports = {
    registerNewUser
}