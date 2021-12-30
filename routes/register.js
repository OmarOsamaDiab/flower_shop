const express = require('express')
const router = express.Router()
const registeration = require('../controllers/register')
router.post('/', registeration.register)

module.exports = router