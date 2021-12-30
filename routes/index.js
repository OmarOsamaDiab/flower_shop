const express = require('express')
const router = new express.Router()

router.use('/register', require('./register'))

module.exports = router
