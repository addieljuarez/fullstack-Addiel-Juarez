const db = require('../config/database')

class ProductModel {
  static getAll (callback) {
    const sql = 'SELECT * FROM products ORDER BY created_at DESC'
    db.all(sql, [], callback)
  }

  static getByID (id, callback) {
    const sql = 'SELECT * FROM products WHERE id=?'
    db.get(sql, [id], callback)
  }

  static create (product, callback) {
    const sql = 'INSERT INTO products(name, price, description) VALUES(?, ?, ?)'
    db.run(sql, [product.name, product.price, product.description || null], function (err) {
      callback(err, this)
    })
  }

  static update (id, product, callback) {
    const sql = 'UPDATE products SET name=?, price=?, description=? WHERE id=?'
    db.run(sql, [product.name, product.price, product.description || null, id], function (err) {
      callback(err, this)
    })
  }

  static delete (id, callback) {
    const sql = 'DELETE FROM products WHERE id=?'
    db.run(sql, [id], function (err) {
      callback(err, this)
    })
  }
}

module.exports = ProductModel
