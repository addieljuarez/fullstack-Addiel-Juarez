const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('List of products')
})

router.post('/', (req, res) => {
  res.send('Create a product')
})

router.put('/:id', (req, res) => {
  res.send(`Update product with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`Delete product with ID ${req.params.id}`)
})

module.exports = router
