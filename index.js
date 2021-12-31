const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes/index'))


app.listen(PORT, () => {
    console.log(`app is currently running on ${PORT}`)
})