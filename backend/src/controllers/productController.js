const db = require('../config/database')
class ProductController {
  // clases static para acceder sin una instancia
  static getAllProducts (req, res) {
    res.json({
      product: {}
    })
  }

  static createProduct (req, res) {
    res.json({
      product: {}
    })
  }

  static updateProduct (req, res) {
    const { id } = req.params
    res.json({
      product: {},
      id
    })
  }

  static deleteProduct (req, res) {
    const { id } = req.params
    res.json({
      product: {},
      id
    })
  }
}

module.exports = ProductController
