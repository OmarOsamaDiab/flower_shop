const bcrypt = require('bcrypt')
const UserDAL = require('../DAL/UserDAL')
const register = async (req, res, next) => {
    const { password, email, username } = req.body
    console.log(password)
    const hashPass = await bcrypt.hash(password, 10)
    const user = await UserDAL.registerNewUser({
        password: hashPass,
        email,
        username
    })
    res.json({
        ...user
    })
}

module.exports = {
    register
}