const express = require('express')
const cors = require('cors')

// crear express app
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

module.exports = app
