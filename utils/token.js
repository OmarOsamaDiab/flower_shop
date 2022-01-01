require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateAccessToken = data => jwt.sign({ ...data }, process.env.SECRET_ACCESS_TOKEN_KEY, {
    expiresIn: '5m'
})

const generateRefreshToken = data => jwt.sign({ ...data }, process.env.SECRET_REFRESH_TOKEN_KEY, {
    expiresIn: '2h'
})

module.exports = {
    generateAccessToken,
    generateRefreshToken
}