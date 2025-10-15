const sqlite = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, '../../databaseProducts.sqlite')

function initDatabase () {
  // creacion de la base de datos si no existe
  db.run(
    `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
      )
    `, (err) => {
      if (err) {
        console.log('Error al crear la tabla', err.message)
      } else {
        console.log('Tabla de productos lista')
      }
    }
  )
}

const db = new sqlite.Database(dbPath, (err) => {
  if (err) {
    console.log('Error al conectar la base de datos', err.message)
  } else {
    console.log('Conectado a la base de datos')
    initDatabase()
  }
})

module.exports = db
