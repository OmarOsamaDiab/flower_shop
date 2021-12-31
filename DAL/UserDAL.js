const User = require('../models/User')

const registerNewUser = ({ email, username, password, phone }) => {
    return User.query().insertAndFetch({
        email, username, password, phone
    })
}

const findByPhone = phone => User.query().findOne({ phone })

const findByEmail = email => User.query().findOne({ email })

const findUser = ({ email, phone }) => User.query().where({ email }).orWhere({ phone }).first()

module.exports = {
    registerNewUser,
    findByPhone,
    findByEmail,
    findUser
}