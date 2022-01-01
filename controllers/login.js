require('dotenv').config()
const bcrypt = require('bcrypt')
const Boom = require('boom')

const UserDAL = require('../DAL/UserDAL')
const { wrapAsyncHandler } = require('../middlewares/wrapAsyncHandler')
const { generateAccessToken, generateRefreshToken } = require('../utils/token')


const login = async (req, res, next) => {
    const { password, username } = req.body
    const user = await UserDAL.findByEmail({ username })
    const matchingPass = await bcrypt.compare(password, user.password)
    if (!matchingPass) {
        throw Boom.forbidden(`username or password does not match`)
    }
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
    login: wrapAsyncHandler(login)
}