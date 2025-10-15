/* global */

const sqlite3 = require('sqlite3').verbose()

// Base de datos en memoria para tests
const testDb = new sqlite3.Database(':memory:')

function setupTestDatabase () {
  return new Promise((resolve, reject) => {
    testDb.run(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

function clearTestDatabase () {
  return new Promise((resolve, reject) => {
    testDb.run('DELETE FROM products', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

function closeTestDatabase () {
  return new Promise((resolve, reject) => {
    testDb.close((err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

module.exports = {
  testDb,
  setupTestDatabase,
  clearTestDatabase,
  closeTestDatabase
}
