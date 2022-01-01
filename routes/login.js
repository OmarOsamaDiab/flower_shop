const express = require('express')
const router = express.Router()
const { login } = require('../controllers/login')
const validator = require('../validators/login')

router.post('/', validator.login, login)

module.exports = router