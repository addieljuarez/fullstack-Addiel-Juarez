require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const productRoutes = require('./routes/productRoutes')
const errorHandler = require('./middlewares/errorHandler')

// crear express app
const app = express()

// middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(helmet()) // seguridad extra en las headers de la peticion

// Routes
app.use('/products', productRoutes)

// middleware error
app.use(errorHandler)

module.exports = app
