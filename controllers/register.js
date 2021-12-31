require('dotenv').config()
const bcrypt = require('bcrypt')
const UserDAL = require('../DAL/UserDAL')
const register = async (req, res, next) => {
    const { password, email, username, phone } = req.body
    const hashPass = await bcrypt.hash(password, parseInt(process.env.SALT))
    const user = await UserDAL.registerNewUser({
        password: hashPass,
        email,
        username,
        phone
    })
    res.json({
        username: user.username,
        phone: user.phone,
        email: user.email,
        id: user.id
    })
}

module.exports = {
    register
}