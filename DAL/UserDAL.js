const User = require('../models/User')

const registerNewUser = ({ email, username, password, phone }) => {
    return User.query().insertAndFetch({
        email, username, password, phone
    })
}

module.exports = {
    registerNewUser
}