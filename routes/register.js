const express = require('express')
const router = express.Router()
const registeration = require('../controllers/register')
const validator = require('../validators/register')

router.post('/', validator.register, registeration.register)

module.exports = router