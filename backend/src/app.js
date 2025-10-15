const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const productRoutes = require('./routes/productRoutes')

// crear express app
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(helmet()) // seguridad extra en las headers de la peticion

// Routes
app.use('/products', productRoutes)

module.exports = app
