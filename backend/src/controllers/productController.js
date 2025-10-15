const productModel = require('../models/productModel')

class ProductController {
  // clases static para acceder sin una instancia
  static getAllProducts (req, res, next) {
    productModel.getAll((err, products) => {
      if (err) {
        return next(err)
      }
      res.status(200).json({ products })
    })
  }

  static createProduct (req, res, next) {
    const { name, price, description } = req.body

    // Validar datos
    if (!name || !price) {
      return res.status(400).json({ error: 'Los Campos de Nombre y precio son obligatorios' })
    }
    if (price <= 0) {
      return res.status(400).json({ error: 'El precio debe ser mayor a 0' })
    }

    const newProduct = { name, price, description }
    productModel.create(newProduct, (err, result) => {
      if (err) {
        return next(err)
      }
      res.status(201).json({
        message: 'Producto creado',
        product: { id: result.lastID, ...newProduct }
      })
    })
  }

  static updateProduct (req, res, next) {
    const { id } = req.params
    const { name, price, description } = req.body

    // Validar datos
    if (!name || !price) {
      return res.status(400).json({ error: 'Los Campos de Nombre y precio son obligatorios' })
    }
    if (price <= 0) {
      return res.status(400).json({ error: 'El precio debe ser mayor a 0' })
    }

    const updatedProduct = { name, price, description }
    productModel.getByID(id, (err, product) => {
      if (err) {
        return next(err)
      }
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
      }
      productModel.update(id, updatedProduct, (err, result) => {
        if (err) {
          return next(err)
        }
        res.status(200).json({
          message: 'Producto actualizado',
          product: { id: Number(id), ...updatedProduct }
        })
      })
    })
  }

  static deleteProduct (req, res, next) {
    const { id } = req.params

    productModel.getByID(id, (err, product) => {
      if (err) {
        return next(err)
      }
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
      }
      productModel.delete(id, (err, result) => {
        if (err) {
          return next(err)
        }
        res.status(200).json({ message: 'Producto eliminado' })
      })
    })
  }
}

module.exports = ProductController
