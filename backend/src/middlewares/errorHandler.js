function errorHandler (err, req, res, next) {
  console.error('Error:', err.message)

  res.status(500)
    .json({
      error: 'Error interno del server',
      message: err.message
    })
}

module.exports = errorHandler
