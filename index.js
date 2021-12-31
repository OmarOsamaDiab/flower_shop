require('dotenv').config()
const express = require('express')
const BodyParser = require('body-parser')
const { errors } = require('celebrate')
const { errorHandler } = require('./middlewares/errorHandler')
const app = express()
const PORT = process.env.PORT || 3030

app.use(BodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes/index'))
app.use(errors())
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`app is currently running on ${PORT}`)
})