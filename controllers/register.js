require('dotenv').config()
const bcrypt = require('bcrypt')
const Boom = require('boom')

const UserDAL = require('../DAL/UserDAL')
const { wrapAsyncHandler } = require('../middlewares/wrapAsyncHandler')
const { generateAccessToken, generateRefreshToken } = require('../utils/token')


const register = async (req, res, next) => {
    const { password, email, username, phone } = req.body
    const existingUser = await UserDAL.findUser({ email, phone })
    if (existingUser)
        throw Boom.badRequest('this user is already registered before')
    const hashPass = await bcrypt.hash(password, parseInt(process.env.SALT))
    const user = await UserDAL.registerNewUser({
        password: hashPass,
        email,
        username,
        phone
    })
    delete user.password
    const accessToken = 'bearer ' + generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)
    res.json({
        ...user,
        accessToken,
        refreshToken
    })
}

module.exports = {
    register: wrapAsyncHandler(register)
}