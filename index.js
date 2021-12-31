const express = require('express')
const BodyParser = require('body-parser')
require('dotenv').config()
const { errors } = require('celebrate')
const app = express()
const PORT = process.env.PORT || 3030

app.use(BodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes/index'))
app.use(errors())

app.listen(PORT, () => {
    console.log(`app is currently running on ${PORT}`)
})